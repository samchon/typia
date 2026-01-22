import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_validateParameters_NativeUnion = (): void =>
  _test_functional_validateParameters("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.validateParameters(p),
  );
