import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_validateParametersAsync_NativeUnion =
  _test_functional_validateParametersAsync("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => Promise<NativeUnion>) =>
      typia.functional.validateParameters(p),
  );
