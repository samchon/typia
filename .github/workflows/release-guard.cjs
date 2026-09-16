#!/usr/bin/env node
"use strict";

const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

const STABLE_VERSION = /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/;
const PRERELEASE_PATTERNS = {
  rc: {
    pattern:
      /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)-rc\.(0|[1-9][0-9]*)$/,
    example: "13.0.0-rc.2",
  },
  next: {
    pattern:
      /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)-next\.(0|[1-9][0-9]*)$/,
    example: "13.0.0-next.0",
  },
};

const command = process.argv[2];

const fail = (message) => {
  console.error(`::error::${message}`);
  process.exit(1);
};

const exportEnvironment = (entries) => {
  const text = Object.entries(entries)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");
  if (process.env.GITHUB_ENV)
    fs.appendFileSync(process.env.GITHUB_ENV, `${text}\n`);
  else console.log(text);
};

const packageJsonFiles = () =>
  childProcess
    .execFileSync("git", ["ls-files"], { encoding: "utf8" })
    .split(/\r?\n/)
    .filter(
      (file) => file === "package.json" || file.endsWith("/package.json"),
    );

const assertPackageVersions = (version) => {
  if (!version) fail("RELEASE_VERSION is required");
  const mismatches = [];
  for (const file of packageJsonFiles()) {
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    if (json.version && json.version !== "0.0.0" && json.version !== version)
      mismatches.push(`${file}: ${json.version}`);
  }
  if (mismatches.length) {
    console.error(`Package versions must all be ${version}:`);
    for (const line of mismatches) console.error(`- ${line}`);
    process.exit(1);
  }
};

const validateContext = () => {
  const eventName = process.env.GITHUB_EVENT_NAME;
  const refName = process.env.GITHUB_REF_NAME ?? "";

  if (eventName === "push") {
    const match = /^v(.+)$/.exec(refName);
    if (!match || !STABLE_VERSION.test(match[1]))
      fail("release tag must be stable vX.Y.Z, for example v13.0.0");
    assertPackageVersions(match[1]);
    exportEnvironment({ NPM_TAG: "latest", RELEASE_VERSION: match[1] });
    return;
  }

  if (eventName === "workflow_dispatch") {
    const tag = process.env.INPUT_TAG;
    const version = process.env.INPUT_VERSION;
    if (refName !== "master")
      fail("manual prerelease publishing must run from master");
    const rule = PRERELEASE_PATTERNS[tag];
    if (!rule) fail("tag must be rc or next");
    if (!rule.pattern.test(version))
      fail(`tag '${tag}' requires version like ${rule.example}`);
    exportEnvironment({ NPM_TAG: tag, RELEASE_VERSION: version });
    return;
  }

  fail(`unsupported release event: ${eventName}`);
};

const bumpIfNeeded = () => {
  const version = process.env.RELEASE_VERSION;
  if (!version) fail("RELEASE_VERSION is required");
  const current = JSON.parse(fs.readFileSync("package.json", "utf8")).version;
  if (current === version) {
    console.log(`Version is already ${version}.`);
    return;
  }
  childProcess.execFileSync(
    "pnpm",
    [
      "bumpp",
      version,
      "--no-commit",
      "--no-tag",
      "--no-push",
      "--recursive",
      "--yes",
    ],
    { stdio: "inherit" },
  );
};

// The release job builds every package before the first publish and then
// publishes the prebuilt `lib/` as is (no `prepack` rebuild), so a missing
// entry point would otherwise ship silently: `pnpm publish` does not check
// that `main`, `types`, or `exports` targets exist. Resolve every published
// entry from `publishConfig` and refuse to publish when one is absent.
const publishedEntries = (publishConfig) => {
  const entries = new Set();
  const add = (entry) => entries.add(path.normalize(entry));
  for (const key of ["main", "module", "types"])
    if (typeof publishConfig[key] === "string") add(publishConfig[key]);
  const visit = (value) => {
    if (typeof value === "string") {
      // subpath patterns such as "./lib/internal/*.js" name a directory of
      // files; check that the directory exists instead of the pattern.
      const star = value.indexOf("*");
      add(star === -1 ? value : path.dirname(value.slice(0, star + 1)));
    } else if (value && typeof value === "object")
      for (const nested of Object.values(value)) visit(nested);
  };
  visit(publishConfig.exports ?? {});
  return [...entries];
};

const validateBuildOutput = () => {
  const missing = [];
  let checked = 0;
  for (const file of packageJsonFiles()) {
    if (!/^packages\/[^/]+\/package\.json$/.test(file)) continue;
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    if (json.private) continue;
    const dir = path.dirname(file);
    for (const entry of publishedEntries(json.publishConfig ?? {})) {
      checked += 1;
      if (!fs.existsSync(path.join(dir, entry)))
        missing.push(`${json.name}: ${entry}`);
    }
  }
  if (checked === 0) fail("no published entry points found under packages/*");
  if (missing.length) {
    console.error("Build output is missing published entry points:");
    for (const line of missing) console.error(`- ${line}`);
    process.exit(1);
  }
  console.log(`Verified ${checked} published entry points.`);
};

switch (command) {
  case "validate-context":
    validateContext();
    break;
  case "bump-if-needed":
    bumpIfNeeded();
    break;
  case "validate-package-versions":
    assertPackageVersions(process.env.RELEASE_VERSION);
    break;
  case "validate-build-output":
    validateBuildOutput();
    break;
  default:
    fail(
      "usage: release-guard.cjs <validate-context|bump-if-needed|validate-package-versions|validate-build-output>",
    );
}
