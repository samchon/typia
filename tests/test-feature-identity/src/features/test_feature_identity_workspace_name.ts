import { TestValidator } from "@nestia/e2e";
import fs from "fs";
import path from "path";

import { Git } from "../Git";

/**
 * Verifies every `tests/*` workspace is named after the directory holding it.
 *
 * The same failure this suite already guards for feature files, one level up.
 * `pnpm --filter <name>` selects a workspace by its **package** name, and a
 * filter that matches nothing still exits 0 — so a package whose name disagrees
 * with its directory turns `pnpm --filter @typia/<dir> start` into a command
 * that runs no tests and reports success. `tests/test-utils-automated` was
 * named `@typia/test-openapiautomated` and did exactly that, nearly certifying
 * a batch on zero executed tests.
 *
 * 1. Collect every tracked `tests/<dir>/package.json`.
 * 2. Assert the scan reached them, so a broken collector cannot pass vacuously.
 * 3. Assert each declares the name `@typia/<dir>`.
 */
export const test_feature_identity_workspace_name = (): void => {
  const workspaces: IWorkspace[] = collect();
  TestValidator.predicate(
    `collected test workspaces (${workspaces.length})`,
    workspaces.length >= POPULATED,
  );
  TestValidator.equals(
    "diagnostics",
    [] as string[],
    workspaces
      .filter((w) => w.name !== `${SCOPE}/${w.directory}`)
      .map(
        (w) =>
          `${w.path}: declares the name "${w.name}" but its directory ` +
          `demands "${SCOPE}/${w.directory}". "pnpm --filter" selects a ` +
          `workspace by package name and exits 0 when it matches nothing, ` +
          `so the two must agree.`,
      )
      .sort(),
  );
};

interface IWorkspace {
  /** Directory name under `tests/`, such as `test-utils`. */
  directory: string;

  /** Repository-relative, slash-separated manifest path, used in diagnostics. */
  path: string;

  /** The `name` the manifest declares. */
  name: string;
}

/**
 * Gather every tracked `tests/<dir>/package.json`.
 *
 * Reads the tree through `git ls-files` for the same reason the feature-file
 * scan in `FeatureIdentity` does: only a tracked manifest can mislead another
 * contributor, and reading git keeps the result independent of whichever suites
 * have run before this one. `tests/config` carries no manifest and is simply
 * not a workspace, so matching nothing there is correct rather than an
 * omission.
 */
const collect = (root: string = Git.toplevel()): IWorkspace[] =>
  // Run from the repository root: `git ls-files -- tests` resolves its
  // pathspec against the working directory, so listing from this file's own
  // directory would match nothing and the floor below would fire.
  Git.run(["ls-files", "-z", "--", "tests"], root)
    .split("\0")
    .map((line) => MANIFEST_PATH.exec(line))
    .filter((match) => match !== null)
    .map((match) => ({
      match,
      absolute: path.resolve(root, match[0]),
    }))
    .filter(({ absolute }) => fs.existsSync(absolute))
    .map(({ match, absolute }) => ({
      directory: match[1]!,
      path: match[0],
      name: String(
        (JSON.parse(fs.readFileSync(absolute, "utf8")) as { name?: unknown })
          .name ?? "",
      ),
    }));

const SCOPE = "@typia";

/** A tracked workspace manifest directly inside a `tests/<dir>` directory. */
const MANIFEST_PATH = /^tests\/([^/]+)\/package\.json$/;

/**
 * A floor, not an expectation: `tests/` holds a dozen-odd workspaces, so
 * anything less means the collector stopped finding them.
 */
const POPULATED = 10;
