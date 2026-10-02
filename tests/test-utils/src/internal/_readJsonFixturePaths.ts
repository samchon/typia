import fs from "fs";
import path from "path";

/**
 * Lists regular JSON fixtures recursively and rejects an empty population.
 *
 * Flat files and nested directories are both supported. Symlinks are not
 * followed, so directory cycles cannot expand this fixture walk. Callers read
 * and parse each file afresh; this helper shares no mutable document state.
 *
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
