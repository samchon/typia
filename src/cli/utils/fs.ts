// @see https://github.com/ryoppippi/bumpp/blob/e93efe88bba42bd0875f12f1c10744f41b732b6e/src/fs.ts
import * as cj from "comment-json";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import process from "node:process";

/**
 * Find a file in the directory hierarchy
 */
export async function findUp(
  name: string | string[],
  { cwd }: { cwd: string | undefined } = { cwd: process.cwd() },
): Promise<string | undefined> {
  let directory = path.resolve(cwd ?? process.cwd());
  const { root } = path.parse(directory);
  const names = [name].flat();

  while (directory && directory !== root) {
    for (const name of names) {
      const filePath = path.join(directory, name);

      try {
        const stats = await fsPromises.stat(filePath);
        if (stats.isFile()) {
          return filePath;
        }
      } catch {}
    }

    directory = path.dirname(directory);
  }
  return;
}

/**
 * Describes a plain-text file.
 */
export interface TextFile {
  path: string;
  data: string;
}

/**
 * Describes a JSON file.
 */
interface JsonFile<T> {
  path: Readonly<string>;
  data: T & cj.CommentJSONValue;
}

/**
 * Reads a JSON file and returns the parsed data.
 * This functions supports JSON/JSONC/JSON with comments.
 */
export async function readJsonFile<T = unknown>(
  name: string,
  cwd: string,
): Promise<JsonFile<T>> {
  const file = await readTextFile(name, cwd);
  const data = cj.parse(file.data) as T & cj.CommentObject;

  return { ...file, data };
}

/**
 * Writes the given data to the specified JSON/JSONC file.
 */
export async function writeJsonFile<T>(file: JsonFile<T>): Promise<void> {
  const newJSON = cj.stringify(file.data, null, 2);

  return writeTextFile({ ...file, data: newJSON });
}

/**
 * Reads a text file and returns its contents.
 */
export function readTextFile(name: string, cwd: string): Promise<TextFile> {
  return new Promise((resolve, reject) => {
    const filePath = path.isAbsolute(name) ? name : path.resolve(cwd, name);

    fs.readFile(filePath, "utf8", (err, text) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          path: filePath,
          data: text,
        });
      }
    });
  });
}

/**
 * Writes the given text to the specified file.
 */
export function writeTextFile(file: TextFile): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(file.path, file.data, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
