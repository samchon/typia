const SuppressWarnings = require("suppress-warnings");
const runner = require("ts-node");

SuppressWarnings([() => true]);

process.cwd(__dirname);
runner.register({
    project: __dirname + "/tsconfig.issues.json",
    compiler: "ttypescript",
});
require(`./issues/${process.argv[2]}.ts`);
