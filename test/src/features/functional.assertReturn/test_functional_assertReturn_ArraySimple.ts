import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertReturn_ArraySimple =
  _test_functional_assertReturn(TypeGuardError)("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertReturn(p),
  );
