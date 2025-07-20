import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsFunction_ArraySimple = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => ArraySimple) =>
    typia.functional.assertEqualsFunction(p),
  );
