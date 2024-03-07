import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeAlias } from "../../structures/NativeAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_NativeAlias =
  _test_functional_assertReturnAsync(TypeGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertReturn(p),
  );
