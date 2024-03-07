import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeSimple } from "../../structures/NativeSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_NativeSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("NativeSimple")(
    NativeSimple,
  )((p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.assertReturn(p),
  );
