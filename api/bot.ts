import { Bot, webhookCallback } from "grammy";

require("dotenv").config();

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

export default webhookCallback(bot, "http");
