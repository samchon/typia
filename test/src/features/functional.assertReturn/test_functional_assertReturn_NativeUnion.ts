import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertReturn_NativeUnion =
  _test_functional_assertReturn(TypeGuardError)("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.assertReturn(p),
  );
