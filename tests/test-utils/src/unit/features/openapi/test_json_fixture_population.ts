import { TestEquality } from "@typia/template/equality";
import fs from "fs";
import os from "os";
import path from "path";

import { _readJsonFixturePaths } from "../../../internal/_readJsonFixturePaths";

/**
 * Verifies fixture enumeration keeps flat and nested JSON files and rejects
 * empty runs.
 *
 * Document conversion cases previously skipped every flat fixture while still
 * reporting success. The same selection owner must keep nested coverage and
 * fail when no regular JSON file can exercise the callers' assertions.
 *
 * 1. Create flat, nested and non-JSON files in a fresh temporary directory.
 * 2. Compare the selected native paths with the two authored JSON filenames.
 * 3. Require an empty directory to fail and release the temporary tree in finally.
 */
export const test_json_fixture_population = async (): Promise<void> => {
  const root: string = await fs.promises.mkdtemp(
    path.join(os.tmpdir(), "typia-fixtures-"),
  );
  try {
    const nested: string = path.join(root, "nested");
    const empty: string = path.join(root, "empty");
    await Promise.all([fs.promises.mkdir(nested), fs.promises.mkdir(empty)]);
    const flatFile: string = path.join(root, "flat.json");
    const nestedFile: string = path.join(nested, "child.json");
    await Promise.all([
      fs.promises.writeFile(flatFile, "{}"),
      fs.promises.writeFile(nestedFile, "{}"),
      fs.promises.writeFile(path.join(root, "ignored.txt"), "{}"),
    ]);
    TestEquality.equals(
      "flat and nested fixtures",
      [flatFile, nestedFile].sort(),
      await _readJsonFixturePaths(root),
    );
    const error: unknown = await _readJsonFixturePaths(empty).then(
      () => undefined,
      (caught: unknown) => caught,
    );
    if (
      !(error instanceof Error) ||
      error.message !== `No JSON fixtures found in ${empty}`
    )
      throw new Error("Empty fixture populations must fail explicitly.");
  } finally {
    await fs.promises.rm(root, { recursive: true, force: true });
  }
};
