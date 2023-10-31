"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var grammy_1 = require("grammy");
require("dotenv/config");
var bot = new grammy_1.Bot(process.env.BOT_TOKEN || "");
bot.command("start", function (ctx) { return ctx.reply("Hello World!"); });
if (process.env.NODE_ENV === "DEVELOPMENT") {
    bot.start();
}
else {
    var port_1 = process.env.PORT || 3000;
    var app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/".concat(bot.token), (0, grammy_1.webhookCallback)(bot, "express"));
    app.listen(port_1, function () { return console.log("listening on port ".concat(port_1)); });
}
