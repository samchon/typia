import { TestValidator } from "@nestia/e2e";

/**
 * Verifies which comparison shapes still fail when the actual lacks a field.
 *
 * `TestValidator.equals` delegates to `json_equal_to`, whose object branch
 * walks `Object.keys` of its **first** argument and drops every key whose value
 * is `undefined`. Passing the actual first therefore stops checking every field
 * the result failed to produce, and the assertion neither fails nor reports —
 * the one failure mode a suite cannot notice from its own output.
 *
 * That shipped twice in this repository. The 64-bit tag suites compared a
 * caught `TypeGuardError`'s `path` and `expected` and passed for any throw that
 * carried neither; `test_json_schemas_v3_0_exclusive_bounds` compared `minimum`
 * and `exclusiveMinimum` read off a downgraded schema and would have passed had
 * the downgrade dropped both flags. Both were found by reading, not by
 * failing.
 *
 * This pins the behavior so the two safe shapes stay safe and the unsafe one
 * stays documented. A syntactic scan cannot replace it: it cannot tell an
 * optional-typed read from a total one, so it flags roughly fifty provably safe
 * call sites. Knowing _which_ shape to reach for is what generalizes (#2350).
 *
 * 1. Pin that the object shape does not catch an absent field, which is the trap
 *    itself.
 * 2. Require the tuple shape to catch it, because the array branch compares
 *    positionally after a length check.
 * 3. Require the `?? null` object shape to catch it, because a normalized value is
 *    never `undefined` and so is never dropped.
 *
 * This sits directly under `features` rather than in a feature directory: it
 * pins the assertion harness every suite here shares, not any one of the
 * subjects they test.
 */
export const test_total_comparison_shape = (): void => {
  interface IReport {
    path?: string;
    expected?: string;
  }
  const complete: IReport = { path: "$input.value", expected: "number" };
  const lost: IReport = {};
  const wanted = { path: "$input.value", expected: "number" };

  const caught = (task: () => void): boolean => {
    try {
      task();
      return false;
    } catch {
      return true;
    }
  };

  //----
  // 1. the trap
  //----
  TestValidator.equals(
    "the object shape does not catch an absent field",
    caught(() =>
      TestValidator.equals(
        "probe",
        { path: lost.path, expected: lost.expected },
        wanted,
      ),
    ),
    false,
  );
  TestValidator.equals(
    "the object shape still catches a wrong value",
    caught(() => TestValidator.equals("probe", { path: "elsewhere" }, wanted)),
    true,
  );

  //----
  // 2. the tuple shape
  //----
  const tuple = (report: IReport): Array<string | null> => [
    report.path ?? null,
    report.expected ?? null,
  ];
  TestValidator.equals(
    "the tuple shape accepts a complete report",
    caught(() =>
      TestValidator.equals("probe", tuple(complete), [
        "$input.value",
        "number",
      ]),
    ),
    false,
  );
  TestValidator.equals(
    "the tuple shape catches an absent field",
    caught(() =>
      TestValidator.equals("probe", tuple(lost), ["$input.value", "number"]),
    ),
    true,
  );

  //----
  // 3. the normalized object shape
  //----
  const normalized = (report: IReport): Record<string, unknown> => ({
    path: report.path ?? null,
    expected: report.expected ?? null,
  });
  TestValidator.equals(
    "the normalized shape accepts a complete report",
    caught(() => TestValidator.equals("probe", normalized(complete), wanted)),
    false,
  );
  TestValidator.equals(
    "the normalized shape catches an absent field",
    caught(() => TestValidator.equals("probe", normalized(lost), wanted)),
    true,
  );
};
