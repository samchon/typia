import fs from "fs";
import path from "path";

/**
 * Lists regular JSON fixtures recursively and rejects an empty population.
 *
 * Flat files and nested directories are both supported. Symlinks are not
 * followed, so directory cycles cannot expand this fixture walk. Callers read
 * and parse each file afresh; this helper shares no mutable document state.
 *
 * @evidence contracts/common.md#principled-implementation Directory entries identify regular JSON files and child directories; a recursive walk returns sorted native paths and rejects zero selected files so fixture-based cases cannot succeed without exercising a document.
 * @evidence contracts/common.md#clear-and-simple-design One helper owns the same enumeration needed by document upgrade, downgrade and migration cases. It returns filenames rather than parsed documents, leaving each caller responsible for its fresh input and native assertions.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Selection uses entry kind and the JSON extension without fixture-name exceptions. Empty and inaccessible directories fail instead of supplying a fabricated document or accepting a vacuous run.
 * @evidence contracts/common.md#meaningful-documentation Native prose states recursive and flat selection, empty-population failure, symlink policy and fresh-document ownership.
 * @evidence contracts/portability.md#os-neutral-implementation fs directory-entry APIs classify files and path.join creates platform-native paths; the walk makes no slash-splitting or drive-letter assumption.
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
