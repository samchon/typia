import fs from "fs";
import path from "path";

/**
 * Lists regular JSON fixtures recursively and rejects an empty population.
 *
 * Flat files and nested directories are both supported. Symlinks are not
 * followed, so directory cycles cannot expand this fixture walk. Callers read
 * and parse each file afresh; this helper shares no mutable document state.
 *
 * @evidence contracts/testing.md#behavioral-verification This support operation returns regular JSON filenames for the document cases and rejects a zero-file run rather than allowing their assertions to pass vacuously. test_json_fixture_population independently exercises flat, nested, ignored-file and empty states.
 * @evidence contracts/testing.md#independent-expectations Directory-entry kinds and the JSON extension determine enrollment; expected fixture paths are authored by the unit case rather than derived from this operation's output. Each consumer parses its own fresh document.
 * @evidence contracts/testing.md#distinguishing-cases The reader distinguishes flat files, nested directories, non-JSON entries and empty populations. Symlinks are not followed; inaccessible directories reject through the filesystem API.
 * @evidence contracts/testing.md#execution-ownership Document integration cases call this portable helper before native assertions. The plugin-free test_json_fixture_population unit supplies an owned temporary tree and releases it in finally, without a producer or host.
 */
export const _readJsonFixturePaths = async (
  root: string,
): Promise<string[]> => {
  const output: string[] = [];
  const visit = async (directory: string): Promise<void> => {
    for (const entry of await fs.promises.readdir(directory, {
      withFileTypes: true,
    })) {
      const location: string = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(location);
      else if (entry.isFile() && entry.name.endsWith(".json"))
        output.push(location);
    }
  };
  await visit(root);
  if (output.length === 0) throw new Error(`No JSON fixtures found in ${root}`);
  return output.sort();
};
