import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { NativeAlias } from "../../structures/NativeAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_NativeAlias =
  _test_functional_assertFunction(TypeGuardError)("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.assertFunction(p),
  );
