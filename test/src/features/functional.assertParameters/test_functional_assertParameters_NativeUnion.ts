import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertParameters_NativeUnion = (): void =>
  _test_functional_assertParameters(TypeGuardError)("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.assertParameters(p),
  );
