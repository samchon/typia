import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertFunction_NativeUnion =
  _test_functional_assertFunction(TypeGuardError)("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.assertFunction(p),
  );
