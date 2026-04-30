const cp = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const { TestValidator } = require("@nestia/e2e");

const { readJson } = require("./readJson");

function createContext(props) {
  const experimentRoot = path.resolve(__dirname, "../..");
  const root = path.resolve(experimentRoot, "../..");
  const tarballs = path.join(root, "experiments", "tarballs");
  const workspace = path.join(experimentRoot, ".tmp", "project");
  const fakeBin = path.join(experimentRoot, ".tmp", "fake-bin");
  const npmLog = path.join(experimentRoot, ".tmp", "npm-wizard.log");
  const state = {
    installScenarios: 0,
    packageJson: null,
  };

  return {
    experimentRoot,
    fakeBin,
    npmLog,
    root,
    skipPack: props.skipPack,
    tarballs,
    workspace,
    installTarballs: () => {
      installTarballs({ root, tarballs, workspace });
      state.packageJson = readJson(path.join(workspace, "package.json"));
    },
    getWizardInstallCommandCounts: () => getWizardInstallCommandCounts(npmLog),
    readBaselinePackageJson: () => structuredClone(state.packageJson),
    readPackageJson: () => readJson(path.join(workspace, "package.json")),
    run: runCommand,
    runSetupWizard: (project) =>
      runSetupWizard({
        fakeBin,
        project,
        state,
        workspace,
      }),
    tarball: (name) => tarball(tarballs, name),
    verifyInstalledPackage: () => verifyInstalledPackage(workspace),
    verifyWizardInstallCommands: () =>
      verifyWizardInstallCommands(npmLog, state.installScenarios),
    writePackageJson: (manifest) => writePackageJson(workspace, manifest),
  };
}

function installTarballs(context) {
  const catalog = readTypescriptCatalog(context.root);
  runCommand(
    [
      "npm install",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      tarball(context.tarballs, "interface"),
      tarball(context.tarballs, "utils"),
      tarball(context.tarballs, "typia"),
      npmInstallSpec("@typescript/native-preview", catalog.nativePreview),
      npmInstallSpec("ttsc", catalog.ttsc),
    ].join(" "),
    context.workspace,
  );
}

function runSetupWizard(context) {
  const executable = path.join(
    context.workspace,
    "node_modules",
    "typia",
    "lib",
    "executable",
    "typia.js",
  );
  const args = [executable, "setup", "--manager", "npm"];
  if (context.project !== null) {
    args.push("--project", context.project);
  }
  const result = cp.spawnSync(process.execPath, args, {
    cwd: context.workspace,
    env: {
      ...process.env,
      PATH: `${context.fakeBin}${path.delimiter}${process.env.PATH}`,
    },
    encoding: "utf8",
  });
  if (result.stdout) {
    process.stdout.write(result.stdout);
  }
  if (result.stderr) {
    process.stderr.write(result.stderr);
  }
  if (result.status !== 0) {
    throw new Error(`typia setup exited with status ${result.status}`);
  }
  context.state.installScenarios += 1;
}

function verifyInstalledPackage(workspace) {
  const installedTypia = path.join(workspace, "node_modules", "typia");
  TestValidator.predicate(
    "typia exposes CommonJS transform entry",
    fs.existsSync(path.join(installedTypia, "lib", "transform.js")),
  );
  TestValidator.predicate(
    "typia exposes ESM transform entry",
    fs.existsSync(path.join(installedTypia, "lib", "transform.mjs")),
  );
  TestValidator.predicate(
    "typia exposes ttsc generate executable",
    fs.existsSync(
      path.join(installedTypia, "lib", "executable", "generate", "ttsc.js"),
    ),
  );
  TestValidator.predicate(
    "typia no longer exposes legacy ttsc plugin path",
    fs.existsSync(path.join(installedTypia, "lib", "ttsc", "plugin.js")) ===
      false,
  );
  TestValidator.predicate(
    "typia package has no generated JavaScript bin wrapper",
    fs.existsSync(path.join(installedTypia, "bin", "ttsc-typia.js")) === false,
  );

  const installedPackage = readJson(path.join(installedTypia, "package.json"));
  TestValidator.equals(
    "typia package removes legacy transform export",
    undefined,
    installedPackage.exports["./lib/ttsc/plugin"],
  );
  TestValidator.equals(
    "typia package exposes transform export object",
    "object",
    typeof installedPackage.exports["./lib/transform"],
  );

  const factory = require(
    path.join(installedTypia, "lib", "transform.js"),
  ).default;
  const plugin = factory(
    { transform: "typia/lib/transform" },
    {
      binary: "ttsc",
      cwd: workspace,
      projectRoot: workspace,
      tsconfig: path.join(workspace, "tsconfig.json"),
    },
  );
  TestValidator.equals(
    "typia transform native mode",
    "typia",
    plugin.native.mode,
  );
  TestValidator.equals(
    "typia transform native contract version",
    1,
    plugin.native.contractVersion,
  );
  TestValidator.equals(
    "typia transform native binary is not prebuilt",
    undefined,
    plugin.native.binary,
  );
  TestValidator.equals(
    "typia transform native source entry",
    "./cmd/ttsc-typia",
    plugin.native.source.entry,
  );
  TestValidator.equals(
    "typia transform native source directory",
    path.join(installedTypia, "native"),
    plugin.native.source.dir,
  );
  TestValidator.predicate(
    "typia transform native source directory exists",
    fs.existsSync(plugin.native.source.dir),
  );
  TestValidator.predicate(
    "typia transform native source entry exists",
    fs.existsSync(path.join(plugin.native.source.dir, "cmd", "ttsc-typia")),
  );
  TestValidator.predicate(
    "typia transform native module file exists",
    fs.existsSync(path.join(plugin.native.source.dir, "go.mod")),
  );
  TestValidator.predicate(
    "typia transform native workspace file exists",
    fs.existsSync(path.join(plugin.native.source.dir, "go.work")),
  );
  TestValidator.predicate(
    "typia transform native vendored ttsc driver exists",
    fs.existsSync(
      path.join(plugin.native.source.dir, "third_party", "ttsc", "driver"),
    ),
  );
  TestValidator.predicate(
    "typia transform native vendored compiler shim module exists",
    fs.existsSync(
      path.join(
        plugin.native.source.dir,
        "third_party",
        "ttsc",
        "shim",
        "compiler",
        "go.mod",
      ),
    ),
  );
}

function verifyWizardInstallCommands(npmLog, count) {
  const commands = getWizardInstallCommandCounts(npmLog);
  TestValidator.equals(
    "setup wizard installs TypeScript Go preview once per scenario",
    count,
    commands.typescript,
  );
  TestValidator.equals(
    "setup wizard installs ttsc once per scenario",
    count,
    commands.ttsc,
  );
  TestValidator.predicate(
    "setup wizard does not install ts-patch",
    commands.legacy === 0,
  );
}

function getWizardInstallCommandCounts(npmLog) {
  const wizardLog = fs.existsSync(npmLog)
    ? fs.readFileSync(npmLog, "utf8")
    : "";
  return {
    legacy: countMatches(wizardLog, "ts-patch"),
    ttsc: countMatches(wizardLog, "i -D ttsc@latest"),
    typescript: countMatches(
      wizardLog,
      "i -D @typescript/native-preview@latest",
    ),
  };
}

function tarball(tarballs, name) {
  const file = path.join(tarballs, `${name}.tgz`);
  TestValidator.predicate(
    `${name} package tarball exists`,
    fs.existsSync(file),
  );
  return file;
}

function readTypescriptCatalog(root) {
  return {
    nativePreview: readCatalogVersion(
      root,
      "typescript",
      "@typescript/native-preview",
    ),
    ttsc: readCatalogVersion(root, "typescript", "ttsc"),
  };
}

function readCatalogVersion(root, catalogName, packageName) {
  const workspace = fs.readFileSync(
    path.join(root, "pnpm-workspace.yaml"),
    "utf8",
  );
  let inCatalogs = false;
  let inCatalog = false;
  for (const line of workspace.split(/\r?\n/)) {
    if (/^catalogs:\s*$/.test(line)) {
      inCatalogs = true;
      inCatalog = false;
      continue;
    }
    if (inCatalogs === false) {
      continue;
    }
    if (/^\S/.test(line)) {
      inCatalogs = false;
      inCatalog = false;
      continue;
    }

    const catalogMatch = line.match(/^  ([^:]+):\s*$/);
    if (catalogMatch) {
      inCatalog = unquoteYamlScalar(catalogMatch[1]) === catalogName;
      continue;
    }
    if (inCatalog === false) {
      continue;
    }

    const versionMatch = line.match(/^    (.+?):\s*(.+?)\s*$/);
    if (versionMatch && unquoteYamlScalar(versionMatch[1]) === packageName) {
      return unquoteYamlScalar(versionMatch[2]);
    }
  }
  throw new Error(
    `Could not find ${packageName} in pnpm-workspace.yaml catalogs.${catalogName}`,
  );
}

function unquoteYamlScalar(value) {
  const trimmed = value.trim();
  const quote = trimmed[0];
  if ((quote === "'" || quote === '"') && trimmed.endsWith(quote)) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function npmInstallSpec(name, version) {
  return `${name}@${version}`;
}

function runCommand(command, cwd) {
  console.log(`$ ${command}`);
  cp.execSync(command, {
    cwd,
    stdio: "inherit",
  });
}

function writePackageJson(workspace, manifest) {
  const next = { ...manifest };
  if (next.scripts === undefined) {
    delete next.scripts;
  }
  if (next.dependencies === undefined) {
    delete next.dependencies;
  }
  if (next.devDependencies === undefined) {
    delete next.devDependencies;
  }
  fs.writeFileSync(
    path.join(workspace, "package.json"),
    JSON.stringify(next, null, 2),
    "utf8",
  );
}

function countMatches(actual, expected) {
  return actual.split(expected).length - 1;
}

module.exports = {
  createContext,
};
