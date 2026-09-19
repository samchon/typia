import { TestEquality } from "@typia/template/equality";

/**
 * Verifies every comparison shape fails when the actual lacks a field.
 *
 * `@nestia/e2e`'s `TestValidator.equals` delegates to `json_equal_to`, whose
 * object branch walks `Object.keys` of its **first** argument only. Passing the
 * actual first therefore stopped checking every field the result failed to
 * produce, and the assertion neither failed nor reported.
 *
 * That shipped here more than once. The 64-bit tag suites compared a caught
 * `TypeGuardError`'s `path` and `expected`, and passed for any throw carrying
 * neither. #2350 then triaged the call sites and pinned which shapes were safe.
 * The same trap still returned in #2399, where an `llm.evaluation` mutation
 * dropped question text and passed.
 *
 * The suites now assert through `TestEquality`, which compares both key sets
 * (#2401). This pins that the trap is closed in every shape, so no call site
 * needs to know which shape is safe any more.
 *
 * 1. Require the object shape to catch an absent field, in both argument orders.
 * 2. Require the tuple shape to catch it.
 * 3. Require the `?? null` object shape to catch it.
 *
 * This sits directly under `features` rather than in a feature directory: it
 * pins the assertion harness every suite shares, not any one of the subjects
 * they test.
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
  // 1. the object shape, in both orders
  //----
  TestEquality.equals(
    "the object shape accepts a complete report",
    caught(() =>
      TestEquality.equals(
        "probe",
        { path: complete.path, expected: complete.expected },
        wanted,
      ),
    ),
    false,
  );
  TestEquality.equals(
    "the object shape catches an absent field, actual first",
    caught(() =>
      TestEquality.equals(
        "probe",
        { path: lost.path, expected: lost.expected },
        wanted,
      ),
    ),
    true,
  );
  TestEquality.equals(
    "the object shape catches an absent key, actual first",
    caught(() => TestEquality.equals("probe", lost, wanted)),
    true,
  );
  TestEquality.equals(
    "the object shape catches an absent field, expected first",
    caught(() =>
      TestEquality.equals("probe", wanted, {
        path: lost.path,
        expected: lost.expected,
      } as typeof wanted),
    ),
    true,
  );

  //----
  // 2. the tuple shape
  //----
  const tuple = (report: IReport): Array<string | null> => [
    report.path ?? null,
    report.expected ?? null,
  ];
  TestEquality.equals(
    "the tuple shape accepts a complete report",
    caught(() =>
      TestEquality.equals("probe", tuple(complete), ["$input.value", "number"]),
    ),
    false,
  );
  TestEquality.equals(
    "the tuple shape catches an absent field",
    caught(() =>
      TestEquality.equals("probe", tuple(lost), ["$input.value", "number"]),
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
  TestEquality.equals(
    "the normalized shape accepts a complete report",
    caught(() => TestEquality.equals("probe", normalized(complete), wanted)),
    false,
  );
  TestEquality.equals(
    "the normalized shape catches an absent field",
    caught(() => TestEquality.equals("probe", normalized(lost), wanted)),
    true,
  );
};
