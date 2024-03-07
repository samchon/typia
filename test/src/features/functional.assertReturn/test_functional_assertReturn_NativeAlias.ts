import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeAlias } from "../../structures/NativeAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_NativeAlias =
  _test_functional_assertReturn(TypeGuardError)("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.assertReturn(p),
  );
