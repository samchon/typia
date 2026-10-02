import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";
import { _validateReport } from "typia/lib/internal/_validateReport";

interface ILongFirst {
  ab: string;
  a: string;
  "a-b": string;
  items: string[];
  duplicates: string[] & tags.UniqueItems;
}

interface IShortFirst {
  a: string;
  ab: string;
  "a-b": string;
  items: string[];
  duplicates: string[] & tags.UniqueItems;
}

/**
 * Verifies generated validation reports only suppress real ancestor paths.
 *
 * The reporter sees errors in declaration order and historically treated a raw
 * identifier prefix as ancestry. This pins both sibling orders plus the quoted,
 * indexed, duplicate, and genuine parent/child path boundaries.
 *
 * 1. Validate equivalent invalid structures with `a` and `ab` reversed.
 * 2. Require every independent sibling, quoted-key, and indexed error path.
 * 3. Exercise the runtime reporter directly to retain true-parent suppression.
 *
 * @evidence contracts/testing.md#behavioral-verification Validation suppresses actual ancestor paths while retaining independent prefix siblings.
 * @evidence contracts/testing.md#independent-expectations Authored sibling/quoted/indexed paths and literal reporter sequences anchor exact expected errors independently.
 * @evidence contracts/testing.md#distinguishing-cases Both declaration orders, eleven array indices, duplicate container, quoted keys and ancestor-first/descendant-first reporter controls remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_validate_report_path_boundary in the schema start suite under ttsx and the native plugin; the exported body owns these assertions.
 * @evidence contracts/e2e.md#necessary-boundary Emitted validators must produce and connect correctly formed paths to the runtime suppression reporter.
 * @evidence contracts/e2e.md#shared-execution The suite project load and native artifact are reused with neighboring cases; no per-input process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and observed outputs are local to the case. The suite owns shared host lifetime; mutable data is not handed to another case and no cold cache behavior is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Both declaration orders, eleven array indices, duplicate container, quoted keys and ancestor-first/descendant-first reporter controls remain. Source review preserves the executable matrix; final native execution is tracked separately.
 */
export const test_validate_report_path_boundary = (): void => {
  const input = {
    a: 0,
    ab: 0,
    "a-b": 0,
    items: new Array(11).fill(0),
    duplicates: ["same", "same"],
  };
  const expected: string[] = [
    "$input.a",
    "$input.ab",
    '$input["a-b"]',
    ...input.items.map((_, index) => `$input.items[${index}]`),
    "$input.duplicates",
  ].sort();

  assertPaths(
    "long property first",
    typia.validate<ILongFirst>(input),
    expected,
  );
  assertPaths(
    "short property first",
    typia.validate<IShortFirst>(input),
    expected,
  );

  const errors: typia.IValidation.IError[] = [];
  const report = _validateReport(errors);
  report(true, error("$input.items[10]"));
  report(true, error("$input.items[1]"));
  report(true, error("$input.items"));
  report(true, error('$input["a-b"]'));
  report(true, error('$input["a"]'));
  TestEquality.equals(
    "runtime reporter boundaries",
    ["$input.items[10]", "$input.items[1]", '$input["a-b"]', '$input["a"]'],
    errors.map(({ path }) => path),
  );

  const ancestorFirst: typia.IValidation.IError[] = [];
  const reportAncestorFirst = _validateReport(ancestorFirst);
  reportAncestorFirst(true, error("$input.items"));
  reportAncestorFirst(true, error("$input.items[0]"));
  TestEquality.equals(
    "ancestor first",
    ["$input.items"],
    ancestorFirst.map(({ path }) => path),
  );
};

const assertPaths = (
  label: string,
  result: typia.IValidation<unknown>,
  expected: string[],
): void => {
  if (result.success)
    throw new Error(`Expected ${label} input to fail validation.`);
  TestEquality.equals(
    label,
    expected,
    result.errors.map(({ path }) => path).sort(),
  );
};

const error = (path: string): typia.IValidation.IError => ({
  path,
  expected: "string",
  value: 0,
});
