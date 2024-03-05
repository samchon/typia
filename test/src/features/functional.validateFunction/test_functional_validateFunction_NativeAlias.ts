import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_validateFunction_NativeAlias =
  _test_functional_validateFunction("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.validateFunction(p),
  );
