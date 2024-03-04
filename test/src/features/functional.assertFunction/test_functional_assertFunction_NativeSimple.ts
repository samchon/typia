import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_assertFunction_NativeSimple =
  _test_functional_assertFunction(TypeGuardError)("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      typia.functional.assertFunction(p),
  );
