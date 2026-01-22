import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertReturnAsync_NativeUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("NativeUnion")(
      NativeUnion,
    )((p: (input: NativeUnion) => Promise<NativeUnion>) =>
      typia.functional.assertReturn(p),
    );
