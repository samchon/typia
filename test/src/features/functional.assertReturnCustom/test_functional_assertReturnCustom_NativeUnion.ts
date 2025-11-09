import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertReturnCustom_NativeUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
