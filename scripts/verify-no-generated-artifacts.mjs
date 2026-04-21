import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const tracked = execFileSync("git", ["ls-files", "-z"], {
  encoding: "utf8",
})
  .split("\u0000")
  .filter(Boolean);

const generatedDirectories = [
  /^packages\/[^/]+\/lib\//,
  /^packages\/[^/]+\/dist\//,
  /^tests\/[^/]+\/bin\//,
  /^tests\/test-typia-ttsc\/fixtures\/[^/]+\/dist\//,
  /^tests\/test-typia-ttsc\/fixtures\/[^/]+\/build\/output\//,
];

const generatedExtensions = [".js.map", ".d.ts.map", ".d.ts", ".js"];
const sourceExtensions = [".ts", ".tsx", ".mts", ".cts"];

const sidecarStem = (file) => {
  for (const extension of generatedExtensions) {
    if (file.endsWith(extension)) return file.slice(0, -extension.length);
  }
  return null;
};

const hasSourceSibling = (file) => {
  if (file.endsWith(".cjs") || file.endsWith(".mjs")) return false;
  const stem = sidecarStem(file);
  if (stem === null) return false;
  return sourceExtensions.some((extension) => existsSync(`${stem}${extension}`));
};

const offenders = tracked.filter(
  (file) =>
    generatedDirectories.some((pattern) => pattern.test(file)) ||
    hasSourceSibling(file),
);

if (offenders.length !== 0) {
  console.error("Tracked generated artifacts are not allowed:");
  for (const file of offenders) console.error(`- ${file}`);
  process.exit(1);
}
