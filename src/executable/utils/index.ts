import path from "node:path";
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
) {
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
