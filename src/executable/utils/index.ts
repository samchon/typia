import path from "node:path";
import process from "node:process";
import fs from 'node:fs/promises'
import { consola } from 'consola'

export function wizard(): void {
  consola.box("Typia Setup Wizard");
}

/**
  * Find a file in the directory hierarchy
  */
export async function findUp(
  name: string | string[],
  { cwd }: { cwd: string | undefined }
): Promise<string | undefined> {
  let directory = path.resolve(cwd ?? process.cwd())
  const { root } = path.parse(directory)
  const names = [name].flat()

  while (directory && directory !== root) {
    for (const name of names) {
      const filePath = path.join(directory, name)

      try {
        const stats = await fs.stat(filePath)
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
  * Find tsconfig.json file
  * If `project` is provided, return it
  * if `project` is not provided, find it in the directory hierarchy
  * if not found, throw an error
  */
export async function findTsConfig(
  project: string | undefined,
  cwd: string=process.cwd()
): Promise<string> {
  if (project != null) {
    return project
  }

  const _project = await findUp("tsconfig.json", { cwd })

  if (_project == null) {
    throw new Error("Unable to find tsconfig.json file.")
  }

  return _project
}
