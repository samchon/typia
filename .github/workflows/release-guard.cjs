// Guards the v12 maintenance line's publishing workflow.
//
// `master` owns the `latest` npm dist-tag. A release cut on this branch must
// never reach it, so the workflow publishes under `legacy` only and this guard
// refuses any context that could mean something else:
//
// - the pushed tag must be a stable `v12.x.y`, so a tag from another line
//   cannot execute this workflow even if one is somehow cut here;
// - every publishable package must already carry that exact version, so a
//   forgotten bump fails the job instead of shipping a mismatched version set.
//
// The dist-tag itself is not validated here because it is not a variable:
// `package:legacy` hardcodes `--tag legacy`.
const fs = require("fs");
const childProcess = require("child_process");

const STABLE_V12 = /^12\.\d+\.\d+$/;

const fail = (message) => {
  console.error(message);
  process.exit(1);
};

const publishablePackageJsonFiles = () =>
  childProcess
    .execFileSync("git", ["ls-files", "packages/*/package.json"], {
      encoding: "utf8",
    })
    .split(/\r?\n/)
    .filter(Boolean);

const assertPackageVersions = (version) => {
  const files = publishablePackageJsonFiles();
  if (files.length === 0) fail("no publishable packages found");
  const mismatches = [];
  for (const file of files) {
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    if (json.version !== version) mismatches.push(`${file}: ${json.version}`);
  }
  if (mismatches.length) {
    console.error(`Package versions must all be ${version}:`);
    for (const line of mismatches) console.error(`- ${line}`);
    process.exit(1);
  }
  console.log(`${files.length} packages are at ${version}.`);
};

const validateContext = () => {
  const eventName = process.env.GITHUB_EVENT_NAME;
  if (eventName !== "push") fail(`unsupported release event: ${eventName}`);

  const match = /^v(.+)$/.exec(process.env.GITHUB_REF_NAME ?? "");
  if (!match || !STABLE_V12.test(match[1]))
    fail("release tag must be a stable v12.x.y, for example v12.2.1");

  assertPackageVersions(match[1]);
};

switch (process.argv[2]) {
  case "validate-context":
    validateContext();
    break;
  default:
    fail("usage: release-guard.cjs validate-context");
}
