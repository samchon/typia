import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArraySimple =
  _test_functional_assertReturn(TypeGuardError)("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertReturn(p),
  );
