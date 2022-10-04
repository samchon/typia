const SuppressWarnings = require("suppress-warnings");
const runner = require("ts-node");

SuppressWarnings([() => true]);
runner.register({
    project: __dirname + "/../tsconfig.test.json",
    compiler: "ttypescript",
});

const program = require("./features/stringify/test_stringify_dynamic_composite.ts");
for (const value of Object.values(program))
    if (typeof value === "function") value();
