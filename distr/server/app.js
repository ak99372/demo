"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Expr = require("express");
var path = require("path");
var app = Expr();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/server/views"));
app.get("/", function (req, res) {
    res.render("index");
});
app.listen(3000, function () {
    console.log("Application listening at http://localhost:3000");
});
//# sourceMappingURL=app.js.map