const fs = require("node:fs");
const path = require("node:path");

const { readJson } = require("./readJson");

function runScenario(context, scenario) {
  console.log(`Scenario: ${scenario.name}`);
  fs.rmSync(path.join(context.workspace, "tsconfig.json"), { force: true });
  fs.rmSync(path.join(context.workspace, "cases", scenario.name), {
    recursive: true,
    force: true,
  });

  const baseline = context.readBaselinePackageJson();
  context.writePackageJson({
    ...baseline,
    ...(scenario.packageJson ?? {
      scripts: scenario.scripts,
      dependencies: scenario.dependencies,
      devDependencies: scenario.devDependencies,
    }),
  });

  const project =
    scenario.project === "auto"
      ? path.join(context.workspace, "tsconfig.json")
      : path.join(context.workspace, "cases", scenario.name, "tsconfig.json");
  fs.mkdirSync(path.dirname(project), { recursive: true });
  if (scenario.tsconfig !== null) {
    fs.writeFileSync(
      project,
      JSON.stringify(scenario.tsconfig, null, 2),
      "utf8",
    );
  }

  context.runSetupWizard(
    scenario.project === "auto" || scenario.tsconfig === null ? null : project,
  );
  scenario.verify({
    manifest: context.readPackageJson(),
    project,
    tsconfig:
      scenario.tsconfig === null || scenario.project === "auto"
        ? readJson(path.join(context.workspace, "tsconfig.json"))
        : readJson(project),
  });
}

module.exports = {
  runScenario,
};
