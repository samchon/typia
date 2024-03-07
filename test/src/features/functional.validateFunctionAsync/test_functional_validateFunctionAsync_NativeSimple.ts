import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_validateFunctionAsync_NativeSimple =
  _test_functional_validateFunctionAsync("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => Promise<NativeSimple>) =>
      typia.functional.validateFunction(p),
  );
