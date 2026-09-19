import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { IValidation, TypeGuardError } from "typia";

/**
 * Verifies exact optional properties reject explicit undefined values.
 *
 * With `exactOptionalPropertyTypes` and typia's `"undefined": false` option,
 * `optional?: T` means the key may be missing, not that the key may be present
 * with `undefined`. Explicit `T | undefined` remains valid.
 *
 * 1. Validate missing optional keys and explicit `| undefined` values.
 * 2. Reject explicit `undefined` for optional-only root, nested, array, and union
 *    properties.
 * 3. Exercise boolean, throwing, and collecting validator families.
 */
export const test_exact_optional_undefined_validators = (): void => {
  const valid: IExactOptional = {
    required: "value",
    optionalUndefined: undefined,
    requiredUndefined: undefined,
    nested: {
      optionalUndefined: undefined,
    },
    array: [
      {
        optionalUndefined: undefined,
      },
    ],
    union: {
      type: "a",
      optionalUndefined: undefined,
    },
  };

  TestEquality.equals(
    "is accepts missing optional",
    typia.is<IExactOptional>(valid),
    true,
  );
  TestEquality.equals(
    "equals accepts missing optional",
    typia.equals<IExactOptional>(valid),
    true,
  );
  TestEquality.equals(
    "validate accepts missing optional",
    typia.validate<IExactOptional>(valid).success,
    true,
  );
  TestEquality.equals(
    "validateEquals accepts missing optional",
    typia.validateEquals<IExactOptional>(valid).success,
    true,
  );

  const invalid: unknown = {
    required: "value",
    optional: undefined,
    optionalUndefined: undefined,
    requiredUndefined: undefined,
    nested: {
      optional: undefined,
      optionalUndefined: undefined,
    },
    array: [
      {
        optional: undefined,
        optionalUndefined: undefined,
      },
    ],
    union: {
      type: "a",
      optional: undefined,
      optionalUndefined: undefined,
    },
  };

  TestEquality.equals(
    "is rejects explicit optional undefined",
    typia.is<IExactOptional>(invalid),
    false,
  );
  TestEquality.equals(
    "equals rejects explicit optional undefined",
    typia.equals<IExactOptional>(invalid),
    false,
  );

  assertTypeGuardError("assert", () => typia.assert<IExactOptional>(invalid));
  assertTypeGuardError("assertGuard", () => {
    const input: unknown = invalid;
    typia.assertGuard<IExactOptional>(input);
  });
  assertTypeGuardError("assertEquals", () =>
    typia.assertEquals<IExactOptional>(invalid),
  );
  assertTypeGuardError("assertGuardEquals", () => {
    const input: unknown = invalid;
    typia.assertGuardEquals<IExactOptional>(input);
  });

  assertValidationPaths("validate", typia.validate<IExactOptional>(invalid));
  assertValidationPaths(
    "validateEquals",
    typia.validateEquals<IExactOptional>(invalid),
  );

  TestEquality.equals(
    "union rejects optional-only undefined",
    typia.is<IExactOptionalUnion>({
      type: "a",
      optional: undefined,
      optionalUndefined: undefined,
    }),
    false,
  );
};

const assertTypeGuardError = (name: string, closure: () => unknown): void => {
  try {
    closure();
    throw new Error(`${name} should throw`);
  } catch (exp) {
    if (exp instanceof Error && exp.message === `${name} should throw`)
      throw exp;
    TestEquality.equals(
      `${name} root path`,
      (exp as TypeGuardError).path,
      "$input.optional",
    );
    TestEquality.equals(
      `${name} root value`,
      (exp as TypeGuardError).value,
      undefined,
    );
  }
};

const assertValidationPaths = (
  name: string,
  result: IValidation<IExactOptional>,
): void => {
  TestEquality.equals(`${name} success`, result.success, false);
  if (result.success === true) return;

  const paths: string[] = result.errors.map((error) => error.path);
  for (const path of [
    "$input.optional",
    "$input.nested.optional",
    "$input.array[0].optional",
  ])
    TestValidator.predicate(`${name} has ${path}`, () => paths.includes(path));
};

interface IExactOptional {
  required: string;
  optional?: string;
  optionalUndefined?: string | undefined;
  requiredUndefined: string | undefined;
  nested?: IExactOptionalNested;
  array: IExactOptionalNested[];
  union: IExactOptionalUnion;
}

interface IExactOptionalNested {
  optional?: number;
  optionalUndefined?: number | undefined;
}

type IExactOptionalUnion =
  | {
      type: "a";
      optional?: string;
      optionalUndefined?: string | undefined;
    }
  | {
      type: "b";
      value: string;
    };
