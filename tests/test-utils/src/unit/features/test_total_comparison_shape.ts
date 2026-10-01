import { TestEquality } from "@typia/oracle/equality";
import assert from "node:assert/strict";

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
 * Native `node:assert` verifies the caught outcome independently of the shared
 * comparison under test.
 *
 * @evidence contracts/testing.md#behavioral-verification Each equals call compares complete or incomplete report values; native assertions require complete values to pass and missing fields or keys to fail in raw, tuple and null-normalized shapes.
 * @evidence contracts/testing.md#independent-expectations Literal path and expected-type fields define the report contract; the local caught probe observes throwing directly, and node:assert establishes the expected boolean without invoking the comparison being tested.
 * @evidence contracts/testing.md#distinguishing-cases A complete report is the positive control for each shape; missing raw fields, missing raw keys, reversed argument order, null-normalized tuples and null-normalized objects retain their distinct regression assertions. General value-kind equality is owned by test_equality_oracle.
 * @evidence contracts/testing.md#execution-ownership This exported node:test case directly imports the plugin-free oracle and is registered by test-utils test:unit; no native compilation or transformed fixture package is needed.
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
  assert.deepEqual(
    caught(() =>
      TestEquality.equals(
        "probe",
        { path: complete.path, expected: complete.expected },
        wanted,
      ),
    ),
    false,
    "the object shape accepts a complete report",
  );
  assert.deepEqual(
    caught(() =>
      TestEquality.equals(
        "probe",
        { path: lost.path, expected: lost.expected },
        wanted,
      ),
    ),
    true,
    "the object shape catches an absent field, actual first",
  );
  assert.deepEqual(
    caught(() => TestEquality.equals("probe", lost, wanted)),
    true,
    "the object shape catches an absent key, actual first",
  );
  assert.deepEqual(
    caught(() =>
      TestEquality.equals("probe", wanted, {
        path: lost.path,
        expected: lost.expected,
      } as typeof wanted),
    ),
    true,
    "the object shape catches an absent field, expected first",
  );

  //----
  // 2. the tuple shape
  //----
  const tuple = (report: IReport): Array<string | null> => [
    report.path ?? null,
    report.expected ?? null,
  ];
  assert.deepEqual(
    caught(() =>
      TestEquality.equals("probe", tuple(complete), ["$input.value", "number"]),
    ),
    false,
    "the tuple shape accepts a complete report",
  );
  assert.deepEqual(
    caught(() =>
      TestEquality.equals("probe", tuple(lost), ["$input.value", "number"]),
    ),
    true,
    "the tuple shape catches an absent field",
  );

  //----
  // 3. the normalized object shape
  //----
  const normalized = (report: IReport): Record<string, unknown> => ({
    path: report.path ?? null,
    expected: report.expected ?? null,
  });
  assert.deepEqual(
    caught(() => TestEquality.equals("probe", normalized(complete), wanted)),
    false,
    "the normalized shape accepts a complete report",
  );
  assert.deepEqual(
    caught(() => TestEquality.equals("probe", normalized(lost), wanted)),
    true,
    "the normalized shape catches an absent field",
  );
};
