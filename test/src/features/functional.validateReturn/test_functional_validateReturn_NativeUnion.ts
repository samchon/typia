import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_validateReturn_NativeUnion =
  _test_functional_validateReturn("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.validateReturn(p),
  );
