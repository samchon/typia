import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_validateFunction_NativeUnion =
  _test_functional_validateFunction("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.validateFunction(p),
  );
