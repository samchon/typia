import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_validateFunctionAsync_NativeAlias =
  _test_functional_validateFunctionAsync("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => Promise<NativeAlias>) =>
      typia.functional.validateFunction(p),
  );
