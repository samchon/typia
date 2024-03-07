import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_validateFunctionAsync_NativeUnion =
  _test_functional_validateFunctionAsync("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => Promise<NativeUnion>) =>
      typia.functional.validateFunction(p),
  );
