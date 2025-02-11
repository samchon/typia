import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertFunctionCustom_ArraySimple =
  _test_functional_assertFunction(CustomGuardError)("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
