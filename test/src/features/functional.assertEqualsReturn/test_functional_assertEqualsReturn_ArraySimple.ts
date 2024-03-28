import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsReturn_ArraySimple =
  _test_functional_assertEqualsReturn(TypeGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => ArraySimple) =>
    typia.functional.assertEqualsReturn(p),
  );
