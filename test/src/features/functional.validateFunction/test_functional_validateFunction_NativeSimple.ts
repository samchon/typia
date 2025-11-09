import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_validateFunction_NativeSimple = (): void =>
  _test_functional_validateFunction("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      typia.functional.validateFunction(p),
  );
