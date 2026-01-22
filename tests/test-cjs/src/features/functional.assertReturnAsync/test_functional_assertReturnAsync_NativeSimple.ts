import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_assertReturnAsync_NativeSimple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("NativeSimple")(
      NativeSimple,
    )((p: (input: NativeSimple) => Promise<NativeSimple>) =>
      typia.functional.assertReturn(p),
    );
