import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies clone and random preserve exact optional omission.
 *
 * The `"undefined": false` option must not let clone synthesize missing
 * optional keys as `undefined`, and random must generate either an omitted key
 * or a valid value for optional-only properties.
 *
 * 1. Clone objects with missing optional keys and assert those keys stay absent.
 * 2. Clone objects with explicit `| undefined` keys and assert those own keys are
 *    preserved.
 * 3. Generate random objects with optional inclusion forced off and on.
 */
export const test_exact_optional_undefined_clone_random = (): void => {
  const missing: IExactOptionalClone = {
    required: "value",
    requiredUndefined: undefined,
    nested: {},
    array: [{}],
  };
  const cloned = typia.misc.clone<IExactOptionalClone>(missing);

  assertOwn("clone root optional", cloned, "optional", false);
  assertOwn("clone root optionalUndefined", cloned, "optionalUndefined", false);
  assertOwn("clone nested optional", cloned.nested, "optional", false);
  assertOwn(
    "clone nested optionalUndefined",
    cloned.nested,
    "optionalUndefined",
    false,
  );
  assertOwn("clone array optional", cloned.array[0]!, "optional", false);
  assertOwn(
    "clone array optionalUndefined",
    cloned.array[0]!,
    "optionalUndefined",
    false,
  );
  assertOwn("clone requiredUndefined", cloned, "requiredUndefined", true);

  const present: IExactOptionalClone = {
    required: "value",
    optional: "root",
    optionalUndefined: undefined,
    requiredUndefined: undefined,
    nested: {
      optional: 1,
      optionalUndefined: undefined,
    },
    array: [
      {
        optional: 2,
        optionalUndefined: undefined,
      },
    ],
  };
  const presentClone = typia.misc.clone<IExactOptionalClone>(present);

  TestValidator.equals("clone present optional", presentClone.optional, "root");
  assertOwn(
    "clone present optionalUndefined",
    presentClone,
    "optionalUndefined",
    true,
  );
  TestValidator.equals(
    "clone present nested optional",
    presentClone.nested.optional,
    1,
  );
  assertOwn(
    "clone present nested optionalUndefined",
    presentClone.nested,
    "optionalUndefined",
    true,
  );

  const omitted = typia.random<IExactOptionalClone>({
    boolean: () => false,
    string: () => "value",
    array: ({ element }) => [element(0, 1)],
  });
  assertOwn("random omitted root optional", omitted, "optional", false);
  assertOwn(
    "random omitted root optionalUndefined",
    omitted,
    "optionalUndefined",
    false,
  );
  assertOwn(
    "random omitted nested optional",
    omitted.nested,
    "optional",
    false,
  );
  assertOwn(
    "random omitted array optional",
    omitted.array[0]!,
    "optional",
    false,
  );

  const included = typia.random<IExactOptionalClone>({
    boolean: () => true,
    string: () => "value",
    array: ({ element }) => [element(0, 1)],
  });
  TestValidator.equals(
    "random included root optional",
    included.optional,
    "value",
  );
  TestValidator.equals(
    "random included nested optional",
    typeof included.nested.optional,
    "number",
  );
  TestValidator.equals(
    "random included array optional",
    typeof included.array[0]!.optional,
    "number",
  );
};

const assertOwn = (
  name: string,
  input: object,
  key: string,
  expected: boolean,
): void => TestValidator.equals(name, key in input, expected);

interface IExactOptionalClone {
  required: string;
  optional?: string;
  optionalUndefined?: string | undefined;
  requiredUndefined: string | undefined;
  nested: IExactOptionalCloneNested;
  array: IExactOptionalCloneNested[];
}

interface IExactOptionalCloneNested {
  optional?: number;
  optionalUndefined?: number | undefined;
}
