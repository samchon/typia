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
 * @evidence contracts/testing.md#behavioral-verification Every selected task executes and is awaited before its success record is printed; a thrown/rejected task records its own failure without suppressing later independent tasks. A nonempty failure list sets final exitCode 1; this runner owns aggregate status rather than a case's expected product value.
 * @evidence contracts/testing.md#independent-expectations Imported authored cases own their literals, fixtures and reference comparisons. This operation requires actual task completion and no caught failure, while runNativeProfiles independently compares printed success identities with its configured registry.
 * @evidence contracts/testing.md#distinguishing-cases Include/exclude substring filters distinguish selected and omitted identities; successful, synchronously throwing and asynchronously rejecting tasks retain separate logs and later execution. Private values collects flag arguments; the runner adds no fault-injection scenario to ordinary product cases.
 * @evidence contracts/testing.md#execution-ownership default/numeric/undefined and provenance entry scripts import this entry under their actual tsconfig authority. Their named task callbacks preserve original case failure identities; filtering, awaiting, reporting and exitCode aggregation are owned here, with no per-case compiler launch.
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
