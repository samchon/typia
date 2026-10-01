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
 * @evidence contracts/testing.md#behavioral-verification typia.validate is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (runtime reporter boundaries; ancestor first). The case documents its purpose as: Verifies generated validation reports only suppress real ancestor paths.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The reporter sees errors in declaration order and historically treated a raw identifier prefix as ancestry. This pins both sibling orders plus the quoted, indexed, duplicate, and genuine parent/child path boundaries. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (runtime reporter boundaries; ancestor first) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_validate_report_path_boundary is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
