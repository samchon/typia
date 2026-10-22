"use strict";
const fs = require("node:fs");
const path = require("node:path");
let buffer = Buffer.alloc(0);
process.stdin.on("data", (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  for (;;) {
    const end = buffer.indexOf("\r\n\r\n");
    if (end === -1) return;
    const match = /Content-Length: *(\d+)/i.exec(buffer.subarray(0, end).toString("ascii"));
    const length = Number(match[1]);
    if (buffer.length < end + 4 + length) return;
    const message = JSON.parse(buffer.subarray(end + 4, end + 4 + length).toString("utf8"));
    buffer = buffer.subarray(end + 4 + length);
    fs.appendFileSync(path.join(__dirname, "mapper.log"), message.method + "\n");
    if (message.id === undefined || message.id === null) continue;
    let result = null;
    if (message.method === "initialize") result = { positionEncoding: "utf-16", diagnosticSource: "sql" };
    if (message.method === "openProject") result = { configIdentity: "" };
    if (message.method === "transform") result = {
      text: "export declare const query: { " + message.params.content.trim() + ": string };\n",
      extension: ".ts",
    };
    const body = Buffer.from(JSON.stringify({ jsonrpc: "2.0", id: message.id, result }), "utf8");
    process.stdout.write("Content-Length: " + body.length + "\r\n\r\n");
    process.stdout.write(body);
  }
});
