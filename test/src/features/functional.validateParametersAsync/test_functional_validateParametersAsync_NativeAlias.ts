import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_validateParametersAsync_NativeAlias =
  _test_functional_validateParametersAsync("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => Promise<NativeAlias>) =>
      typia.functional.validateParameters(p),
  );
