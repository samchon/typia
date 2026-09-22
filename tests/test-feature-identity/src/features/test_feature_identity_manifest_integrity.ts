import { TestEquality } from "@typia/template/equality";
import { visit } from "jsonc-parser";
import fs from "node:fs";
import path from "node:path";

import { Git } from "../Git";

/**
 * Verifies package manifests have unique keys and reachable Node script
 * entrypoints.
 *
 * JSON.parse silently kept the latter of two website TypeScript declarations,
 * while a stale `node build/tgz` script advertised a module that never existed.
 * Both defects are visible from tracked manifests without running a release.
 *
 * 1. Parse every tracked package manifest with duplicate-key detection.
 * 2. Resolve direct `node <path>` script entries from the package directory.
 * 3. Permit compiler-owned `bin` and `lib` outputs only when a build script owns
 *    them.
 */
export const test_feature_identity_manifest_integrity = (): void => {
  const root: string = Git.toplevel();
  const failures: string[] = [];
  const files: string[] = Git.run(
    ["ls-files", "package.json", ":(glob)**/package.json"],
    root,
  )
    .split(/\r?\n/)
    .filter((file) => file.length !== 0);
  for (const file of files) {
    const absolute: string = path.join(root, file);
    const text: string = fs.readFileSync(absolute, "utf8");
    const stack: Set<string>[] = [];
    visit(text, {
      onObjectBegin: () => {
        stack.push(new Set());
      },
      onObjectProperty: (name, offset) => {
        const keys: Set<string> = stack.at(-1)!;
        if (keys.has(name)) {
          const line: number = text.slice(0, offset).split(/\r?\n/).length;
          failures.push(`${file}:${line} duplicates JSON key ${name}`);
        } else keys.add(name);
      },
      onObjectEnd: () => {
        stack.pop();
      },
    });

    const manifest = JSON.parse(text) as {
      scripts?: Record<string, string>;
    };
    for (const [name, command] of Object.entries(manifest.scripts ?? {})) {
      const match: RegExpMatchArray | null = command.match(
        /(?:^|&&\s*)node\s+([^\s-][^\s]*)/,
      );
      if (match === null) continue;
      const target: string = match[1]!.replace(/^['"]|['"]$/g, "");
      if (
        generatedTarget(manifest.scripts, target) ||
        resolves(path.dirname(absolute), target)
      )
        continue;
      failures.push(`${file} script ${name} cannot resolve ${target}`);
    }
  }
  TestEquality.equals("manifest failures", failures, []);
};

const generatedTarget = (
  scripts: Record<string, string> | undefined,
  target: string,
): boolean =>
  (target === "bin" ||
    target.startsWith("bin/") ||
    target.startsWith("lib/")) &&
  scripts?.build !== undefined;

const resolves = (directory: string, target: string): boolean =>
  [
    target,
    `${target}.js`,
    `${target}.cjs`,
    `${target}.mjs`,
    path.join(target, "index.js"),
    path.join(target, "index.cjs"),
    path.join(target, "index.mjs"),
  ].some((candidate) => fs.existsSync(path.join(directory, candidate)));
