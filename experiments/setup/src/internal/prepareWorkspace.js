const fs = require("node:fs");
const path = require("node:path");

function prepareWorkspace(context) {
  fs.rmSync(path.join(context.experimentRoot, ".tmp"), {
    recursive: true,
    force: true,
  });
  fs.mkdirSync(context.workspace, { recursive: true });
  fs.mkdirSync(context.fakeBin, { recursive: true });
  fs.writeFileSync(
    path.join(context.workspace, "package.json"),
    JSON.stringify(
      {
        private: true,
        name: "@typia/experiment-setup-wizard-npm-consumer",
        version: "0.0.0",
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    path.join(context.fakeBin, "npm"),
    [
      "#!/usr/bin/env node",
      'const fs = require("node:fs");',
      `fs.appendFileSync(${JSON.stringify(context.npmLog)}, process.argv.slice(2).join(" ") + "\\n");`,
    ].join("\n"),
  );
  fs.chmodSync(path.join(context.fakeBin, "npm"), 0o755);
}

module.exports = {
  prepareWorkspace,
};
