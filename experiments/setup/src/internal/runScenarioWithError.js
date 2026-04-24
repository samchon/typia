const fs = require("node:fs");
const path = require("node:path");

function runScenarioWithError(context, scenario) {
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

  const installCommands = {
    before: context.getWizardInstallCommandCounts(),
  };
  scenario.verify({
    error: (() => {
      try {
        context.runSetupWizard(
          scenario.project === "auto" || scenario.tsconfig === null
            ? null
            : project,
        );
        return null;
      } catch (error) {
        return error;
      }
    })(),
    installCommands: {
      ...installCommands,
      after: context.getWizardInstallCommandCounts(),
    },
    manifest: context.readPackageJson(),
    project,
  });
}

module.exports = {
  runScenarioWithError,
};
