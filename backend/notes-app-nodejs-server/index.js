require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const User = require("./models/user.model.js");

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utils.js");

app.use(express.json());

app.use(
	cors({
		origin: "*",
	}),
);

app.get("/", (req, res) => {
	res.json({ data: "hello" });
});

app.post("/create-account", async (req, res) => {
	const { fullName, email, password } = req.body;

	if (!fullName) {
		return res
			.status(400)
			.json({ error: true, message: "Full Name is required" });
	}

	if (!email) {
		return res.status(400).json({
			error: true,
			message: "Password is required",
		});
	}

	if (!password) {
		return res.status(400).json({
			error: true,
			message: "Password is required",
		});
	}

	const isUser = await User.findOne({ email: email });

	if (isUser) {
		return res.json({
			error: true,
			message: "User already exist!",
		});
	}

	const user = await new User({
		fullName,
		email,
		password,
	}).save();

	const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "3600m",
	});

	return res.json({
		error: false,
		user,
		accessToken,
		message: "Registration Successful",
	});
});

app.listen(8000);

module.exports = app;
