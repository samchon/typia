import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ArraySimple =
  _test_functional_assertEqualsReturn(TypeGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => ArraySimple) =>
    typia.functional.assertEqualsReturn(p),
  );
