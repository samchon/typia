import { TestValidator } from "@nestia/e2e";
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
  TestValidator.equals(
    "runtime reporter boundaries",
    ["$input.items[10]", "$input.items[1]", '$input["a-b"]', '$input["a"]'],
    errors.map(({ path }) => path),
  );

  const ancestorFirst: typia.IValidation.IError[] = [];
  const reportAncestorFirst = _validateReport(ancestorFirst);
  reportAncestorFirst(true, error("$input.items"));
  reportAncestorFirst(true, error("$input.items[0]"));
  TestValidator.equals(
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
  TestValidator.equals(
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
