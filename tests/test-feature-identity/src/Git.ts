import cp from "child_process";

/**
 * Minimal git runner shared by this suite's repository scans.
 *
 * Every check here reads the **tracked** tree rather than the working
 * directory, so each one needs the same two calls. Keeping them in one place
 * keeps the failure behavior identical: a git invocation that cannot run must
 * throw, never degrade to an empty result, because a vacuous pass would hide
 * the very regressions this suite exists to catch.
 */
export namespace Git {
  /**
   * Run one git command and return its stdout.
   *
   * @param args Arguments passed to git, unshelled.
   * @param cwd Directory to run from. A pathspec resolves against this, so a
   *   repository-wide scan must pass {@link toplevel}.
   * @returns The command's stdout.
   */
  export const run = (args: string[], cwd: string): string => {
    try {
      return cp.execFileSync("git", args, {
        cwd,
        encoding: "utf8",
        // Capture git's own report instead of letting it print itself into
        // the suite log, so a failure arrives through the throw below.
        stdio: ["ignore", "pipe", "pipe"],
        // The default 1 MB would turn repository growth into an ENOBUFS
        // surfacing from inside a naming check.
        maxBuffer: 64 * 1024 * 1024,
      });
    } catch (error) {
      const stderr: string = String(
        (error as { stderr?: unknown }).stderr ?? "",
      ).trim();
      throw new Error(
        `Failed to run "git ${args.join(" ")}" in "${cwd}". ` +
          `This check reads the tracked tree through git.\n` +
          `${(error as Error).message}` +
          `${stderr.length !== 0 ? `\n${stderr}` : ""}`,
      );
    }
  };

  /**
   * Absolute path of the enclosing git work tree.
   *
   * @param cwd Directory to resolve from; defaults to this file's own.
   * @returns The repository root.
   */
  export const toplevel = (cwd: string = __dirname): string =>
    run(["rev-parse", "--show-toplevel"], cwd).trim();
}
