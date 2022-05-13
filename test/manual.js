const SuppressWarnings = require("suppress-warnings");
const runner = require("ts-node");

SuppressWarnings([() => true]);
runner.register({
    project: __dirname + "/../tsconfig.test.json",
    compiler: "ttypescript"
});

const program = require("./issues/fast-json-stringify-top-level-one-of.ts");
for (const value of Object.values(program))
    if (typeof value === "function")
        value();