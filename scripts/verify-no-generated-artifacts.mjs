import { execFileSync } from "node:child_process";

const generatedDirectories = [
  /^packages\/[^/]+\/lib\//,
  /^packages\/[^/]+\/dist\//,
  /^tests\/[^/]+\/bin\//,
  /^packages\/[^/]+\/src\/.*\.(?:js|d\.ts|js\.map)$/,
  /^tests\/[^/]+\/src\/.*\.(?:js|d\.ts|js\.map)$/,
];

const listUntrackedFiles = () => {
  try {
    return execFileSync(
      "git",
      ["ls-files", "-z", "--others", "--exclude-standard", "--", "packages", "tests"],
      { encoding: "utf8" },
    )
      .split("\u0000")
      .filter(Boolean);
  } catch {
    return [];
  }
};

const offenders = listUntrackedFiles().filter((file) =>
  generatedDirectories.some((pattern) => pattern.test(file)),
);

if (offenders.length !== 0) {
  console.error("Untracked generated artifacts are not allowed:");
  for (const file of offenders) console.error(`- ${file}`);
  process.exit(1);
}
