import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_validateReturnAsync_NativeUnion =
  _test_functional_validateReturnAsync("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => Promise<NativeUnion>) =>
      typia.functional.validateReturn(p),
  );
