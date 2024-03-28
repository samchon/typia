import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_assertReturn_NativeSimple =
  _test_functional_assertReturn(TypeGuardError)("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      typia.functional.assertReturn(p),
  );
