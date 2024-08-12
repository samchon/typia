// @see https://github.com/ryoppippi/bumpp/blob/e93efe88bba42bd0875f12f1c10744f41b732b6e/src/fs.ts

import path from "node:path";
import process from "node:process";
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import * as jsonc from 'jsonc-parser'

/**
  * Find a file in the directory hierarchy
  */
export async function findUp(
  name: string | string[],
  { cwd }: { cwd: string | undefined } = { cwd: process.cwd() }
): Promise<string | undefined> {
  let directory = path.resolve(cwd ?? process.cwd())
  const { root } = path.parse(directory)
  const names = [name].flat()

  while (directory && directory !== root) {
    for (const name of names) {
      const filePath = path.join(directory, name)

      try {
        const stats = await fsPromises.stat(filePath)
        if (stats.isFile()) {
          return filePath
        }
      }
      catch {}
    }

    directory = path.dirname(directory)
  }
  return;
}

/**
 * Describes a plain-text file.
 */
export interface TextFile {
  path: string
  data: string
}

/**
 * Modifies a JSON file.
 */
type ModifyUnion = [jsonc.JSONPath, unknown]

/**
 * Describes a JSON file.
 */
interface JsonFile {
  path: Readonly<string>
  text: Readonly<string>
  data: Readonly<unknown>
  modified: ModifyUnion[]
}

/**
 * Reads a JSON file and returns the parsed data.
 * This functions supports JSON/JSONC/JSON with comments.
 */
export async function readJsonFile(name: string, cwd: string): Promise<JsonFile> {
  const file = await readTextFile(name, cwd)
  const data = jsonc.parse(file.data)
  const modified: ModifyUnion[] = []

  return { ...file, data, modified, text: file.data }
}

/**
 * Writes the given data to the specified JSON/JSONC file.
 */
export async function writeJsonFile(file: JsonFile): Promise<void> {
  let newJSON = file.text
  for (const [key, value] of file.modified) {
    const edit = (jsonc.modify(file.text, key, value, {}))
    newJSON = jsonc.applyEdits(newJSON, edit)
  }

  return writeTextFile({ ...file, data: newJSON })
}

/**
 * Reads a text file and returns its contents.
 */
export function readTextFile(name: string, cwd: string): Promise<TextFile> {
  return new Promise((resolve, reject) => {
    const filePath = path.join(cwd, name)

    fs.readFile(filePath, 'utf8', (err, text) => {
      if (err) {
        reject(err)
      }
      else {
        resolve({
          path: filePath,
          data: text,
        })
      }
    })
  })
}

/**
 * Writes the given text to the specified file.
 */
export function writeTextFile(file: TextFile): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(file.path, file.data, (err) => {
      if (err)
        reject(err)

      else
        resolve()
    })
  })
}
