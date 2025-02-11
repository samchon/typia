import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_isParametersAsync_NativeSimple =
  _test_functional_isParametersAsync("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => Promise<NativeSimple>) =>
      typia.functional.isParameters(p),
  );
