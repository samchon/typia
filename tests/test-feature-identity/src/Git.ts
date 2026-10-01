import cp from "child_process";

/**
 * Minimal git runner shared by this suite's repository scans.
 *
 * Every check here reads the **tracked** tree rather than the working
 * directory, so each one needs the same two calls. Keeping them in one place
 * keeps the failure behavior identical: a git invocation that cannot run must
 * throw, never degrade to an empty result, because a vacuous pass would hide
 * the very regressions this suite exists to catch.
 *
 * @evidence contracts/common.md#principled-implementation Executing git through an argument vector (no shell) returns exactly the command stdout and converts any failure into an exception, so the callers' tracked-file population is either the real git answer or an error. The premise is that git is on PATH and that the repository is the cwd the caller supplies.
 * @evidence contracts/common.md#clear-and-simple-design One namespace owns the two git invocations the repository scans share; callers keep their own parsing, so process execution policy lives in one place.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing special-cases a repository, path or expected output and no foreign process or global is patched; an unavailable git surfaces as a thrown error instead of an empty inventory.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment records why the tracked tree is read through git and why failure must throw; each function documents its argument, cwd and return contract.
 */
export namespace Git {
  /**
   * Run one git command and return its stdout.
   *
   * @param args Arguments passed to git, unshelled.
   * @param cwd Directory to run from. A pathspec resolves against this, so a
   *   repository-wide scan must pass {@link toplevel}.
   *
   * @returns The command's stdout.
   *
   * @evidence contracts/common.md#principled-implementation execFileSync passes arguments without shell interpretation and returns stdout as UTF-8 text; a non-zero exit, missing executable or exceeded buffer throws, and the wrapper adds the command, cwd and git stderr to the message. The 64 MiB buffer bounds the tracked-path listing instead of silently truncating it.
   * @evidence contracts/common.md#clear-and-simple-design A single try/catch wraps one process call and rewrites the failure message; no retry or fallback path exists.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The function neither suppresses a failing command nor returns a default value, so it cannot manufacture a vacuous successful scan.
   * @evidence contracts/common.md#meaningful-documentation The comment states the unshelled arguments, the cwd resolution rule for pathspecs and the stdout return, and inline comments explain why stderr is captured and why the buffer is enlarged.
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
   *
   * @returns The repository root.
   *
   * @evidence contracts/common.md#principled-implementation git rev-parse --show-toplevel is the repository's own definition of the work tree root, and trimming removes only the terminating newline.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation to run keeps process policy in one place and adds only the argument list and trim.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The root comes from git for whichever directory is supplied, with no fixed path or environment special case.
   * @evidence contracts/common.md#meaningful-documentation The comment names the cwd default and the absolute work-tree return value.
   */
  export const toplevel = (cwd: string = __dirname): string =>
    run(["rev-parse", "--show-toplevel"], cwd).trim();
}
