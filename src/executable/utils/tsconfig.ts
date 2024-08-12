import process from "node:process"
import { findUp } from "./find-files"

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
