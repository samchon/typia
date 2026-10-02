// Local host declarations keep no-DOM/no-@types authority projects unchanged.
declare const console: {
  log(...args: unknown[]): void;
  error(...args: unknown[]): void;
};
declare const process: { argv: string[]; exitCode?: number };

/**
 * Executes the named cases of one immutable native compiler-option context.
 *
 * Each entry supplies actual imported callbacks; a failed case cannot prevent
 * later independent cases from running or leave the child process successful.
 *
 * @evidence contracts/common.md#principled-implementation Each selected task is awaited once in order, with success/failure printed under its profile and case identity. Failures are retained and set nonzero process exitCode after all cases; malformed CLI mode selection remains with the profile entry.
 * @evidence contracts/common.md#clear-and-simple-design One execution loop owns case filtering and failure aggregation; the caller owns compiler context and callback list. Local host declarations avoid importing ambient Node/DOM types into provenance-sensitive projects.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No callback is patched, skipped by verdict or replaced with emitted-text checks. Include/exclude filtering follows the same substring rules as TestServant and is explicitly counted; producer options come from the official CLI project, not from task arguments alone.
 * @evidence contracts/common.md#meaningful-documentation The comment explains actual callback execution, failure continuation and local host declarations; logs retain profile/case identities and final selected counts for execution census.
 * @evidence contracts/performance.md#efficient-algorithms One pass selects and executes cases; filter work grows with case names and supplied include/exclude strings. Cases execute sequentially and local failure storage grows only with failing cases.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The caller has already prepared this profile once through official ttsx. This function coordinates no compilation cache; each callback's assertions must execute rather than reuse a previous verdict.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Only the selected list and local failures are retained until this invocation ends. Each task is awaited before another starts; the surrounding official CLI owns the child lifetime and this operation acquires no independent host or file handle.
 */
export async function executeProfile(
  profile: string,
  cases: readonly { name: string; task: () => void | Promise<void> }[],
): Promise<void> {
  const values = (key: string): string[] => {
    const result: string[] = [];
    const args = process.argv.slice(3);
    for (let i = 0; i < args.length; ++i)
      if (args[i] === `--${key}`)
        while (i + 1 < args.length && !args[i + 1]!.startsWith("--"))
          result.push(args[++i]!);
    return result;
  };
  const include = values("include"),
    exclude = values("exclude");
  const selected = cases.filter(
    ({ name }) =>
      (include.length === 0 || include.some((word) => name.includes(word))) &&
      exclude.every((word) => !name.includes(word)),
  );
  const failures: unknown[] = [];
  for (const entry of selected) {
    try {
      await entry.task();
      console.log(`Native profile ${profile}: ${entry.name}: Success`);
    } catch (error) {
      failures.push(error);
      console.error(error);
      console.log(`Native profile ${profile}: ${entry.name}: Failed`);
    }
  }
  console.log(
    `Native profile ${profile}: ${selected.length} cases, ${failures.length} failures`,
  );
  if (failures.length) process.exitCode = 1;
}
