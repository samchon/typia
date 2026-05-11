// Enforce exact 100% block coverage for typia native Go logic.

const cp = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const typiaDir = path.join(root, "packages", "typia");
const nativeDir = path.join(typiaDir, "native");
const testDir = path.join(typiaDir, "test");
const coverageRoot = fs.mkdtempSync(path.join(os.tmpdir(), "typia-go-coverage-"));
const coverpkg = "github.com/samchon/typia/packages/typia/native/...";

try {
  const internalProfile = path.join(coverageRoot, "native-internal.out");
  const externalProfile = path.join(coverageRoot, "native-external.out");
  const mergedProfile = path.join(coverageRoot, "native-merged.out");

  runInternalCoverage(internalProfile);
  runExternalCoverage(externalProfile);
  mergeCoverprofiles(mergedProfile, [internalProfile, externalProfile]);
  if (process.env.TYPIA_GO_COVERAGE_PROFILE) {
    fs.copyFileSync(mergedProfile, path.resolve(process.env.TYPIA_GO_COVERAGE_PROFILE));
  }
  assertFullCoverage("packages/typia/native", mergedProfile, { cwd: nativeDir });
} finally {
  if (!process.env.TYPIA_GO_COVERAGE_KEEP) {
    fs.rmSync(coverageRoot, { recursive: true, force: true });
  } else {
    console.log(`kept Go coverage scratch: ${coverageRoot}`);
  }
}

function runInternalCoverage(coverprofile) {
  const scratch = fs.mkdtempSync(path.join(coverageRoot, "scratch-"));
  const scratchTypia = path.join(scratch, "packages", "typia");
  const scratchNative = path.join(scratchTypia, "native");
  fs.mkdirSync(scratchTypia, { recursive: true });

  for (const entry of fs.readdirSync(typiaDir, { withFileTypes: true })) {
    if (entry.name === "native" || entry.name === "test") continue;
    fs.symlinkSync(
      path.join(typiaDir, entry.name),
      path.join(scratchTypia, entry.name),
      entry.isDirectory() ? "dir" : "file",
    );
  }
  fs.cpSync(nativeDir, scratchNative, { recursive: true });
  linkIfExists(path.join(root, "tests"), path.join(scratch, "tests"), "dir");
  linkIfExists(path.join(root, "node_modules"), path.join(scratch, "node_modules"), "dir");
  for (const file of ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "tsconfig.json"]) {
    linkIfExists(path.join(root, file), path.join(scratch, file), "file");
  }

  const source = path.join(testDir, "native");
  for (const file of walkGoTests(source)) {
    const relative = path.relative(source, file);
    const target = path.join(scratchNative, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
  }

  run(
    "go",
    [
      "test",
      "-tags",
      "typia_native_internal",
      "./...",
      "-covermode=atomic",
      `-coverpkg=${coverpkg}`,
      `-coverprofile=${coverprofile}`,
    ],
    { cwd: scratchNative },
  );
}

function runExternalCoverage(coverprofile) {
  run(
    "go",
    [
      "test",
      "./...",
      "-covermode=atomic",
      `-coverpkg=${coverpkg}`,
      `-coverprofile=${coverprofile}`,
    ],
    { cwd: testDir },
  );
}

function linkIfExists(source, target, type) {
  if (fs.existsSync(source)) {
    fs.symlinkSync(source, target, type);
  }
}

function walkGoTests(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkGoTests(file));
    } else if (entry.isFile() && entry.name.endsWith("_test.go")) {
      out.push(file);
    }
  }
  return out.sort();
}

function mergeCoverprofiles(target, profiles) {
  const modes = new Set();
  const blocks = new Map();
  for (const profile of profiles) {
    const text = fs.readFileSync(profile, "utf8").trim();
    if (text === "") continue;
    for (const line of text.split(/\r?\n/)) {
      if (line.startsWith("mode: ")) {
        modes.add(line.slice("mode: ".length));
        continue;
      }
      const match = line.match(/^(.+:\d+\.\d+,\d+\.\d+)\s+(\d+)\s+(\d+)$/);
      if (match === null) {
        throw new Error(`invalid coverage line: ${line}`);
      }
      const key = `${match[1]} ${match[2]}`;
      blocks.set(key, (blocks.get(key) ?? 0) + Number(match[3]));
    }
  }
  if (modes.size === 0) {
    throw new Error("coverage merge received no profiles");
  }
  if (modes.size !== 1) {
    throw new Error(`coverage merge received mixed modes: ${[...modes].join(", ")}`);
  }
  const mode = [...modes][0];
  fs.writeFileSync(
    target,
    [`mode: ${mode}`, ...[...blocks.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([key, count]) => `${key} ${count}`)].join("\n") + "\n",
    "utf8",
  );
}

function assertFullCoverage(label, coverprofile, options) {
  const result = run("go", ["tool", "cover", "-func", coverprofile], {
    ...options,
    capture: true,
  });
  const uncovered = readCoverprofileRecords(coverprofile).filter(
    (block) => block.statements > 0 && block.count === 0,
  );
  if (uncovered.length > 0) {
    const total = result.stdout
      .trim()
      .split(/\r?\n/)
      .find((line) => /\btotal:\s+\(statements\)\s+/.test(line));
    if (total !== undefined) {
      console.log(total);
    }
    const byFile = new Map();
    for (const block of uncovered) {
      const file = block.location.split(":")[0];
      const entry = byFile.get(file) ?? { blocks: 0, statements: 0 };
      entry.blocks += 1;
      entry.statements += block.statements;
      byFile.set(file, entry);
    }
    const topFiles = [...byFile.entries()]
      .sort(([, a], [, b]) => b.blocks - a.blocks || b.statements - a.statements)
      .slice(0, 20)
      .map(([file, entry]) => `  - ${file}: ${entry.blocks} block(s), ${entry.statements} statement(s)`)
      .join("\n");
    if (topFiles !== "") {
      console.log("top uncovered files:\n" + topFiles);
    }
    const topFunctions = result.stdout
      .trim()
      .split(/\r?\n/)
      .filter((line) => !/\btotal:\s+\(statements\)\s+/.test(line))
      .filter((line) => /\s[0-9]+\.[0-9]%$/.test(line) && !/\s100\.0%$/.test(line))
      .slice(0, 40)
      .join("\n");
    if (topFunctions !== "") {
      console.log("uncovered functions:\n" + topFunctions);
    }
    const sample = uncovered
      .slice(0, 20)
      .map((block) => `  - ${block.location} (${block.statements} statements)`)
      .join("\n");
    throw new Error(
      `${label}: Go logic coverage has ${uncovered.length} uncovered block(s), expected exact 100%\n${sample}`,
    );
  }
  console.log(`${label}: Go logic coverage 100.0%`);
}

function readCoverprofileRecords(coverprofile) {
  const text = fs.readFileSync(coverprofile, "utf8").trim();
  if (text === "") return [];
  const records = [];
  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("mode: ")) continue;
    const match = line.match(/^(.+:\d+\.\d+,\d+\.\d+)\s+(\d+)\s+(\d+)$/);
    if (match === null) {
      throw new Error(`invalid coverage line: ${line}`);
    }
    records.push({
      count: Number(match[3]),
      location: match[1],
      statements: Number(match[2]),
    });
  }
  return records;
}

function run(command, args, options) {
  const result = cp.spawnSync(command, args, {
    cwd: options.cwd,
    env: process.env,
    encoding: options.capture ? "utf8" : undefined,
    stdio: options.capture ? "pipe" : "inherit",
    windowsHide: true,
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    const suffix = options.capture && result.stderr ? `\n${result.stderr}` : "";
    throw new Error(`${command} ${args.join(" ")} failed with status ${result.status ?? 1}${suffix}`);
  }
  return result;
}
