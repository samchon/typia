import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertFunction_ArraySimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertFunction(p),
  );
