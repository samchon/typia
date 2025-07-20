import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_validateParametersAsync_NativeSimple =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("NativeSimple")(NativeSimple)(
      (p: (input: NativeSimple) => Promise<NativeSimple>) =>
        typia.functional.validateParameters(p),
    );
