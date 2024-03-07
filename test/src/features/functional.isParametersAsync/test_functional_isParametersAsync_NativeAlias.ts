import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_isParametersAsync_NativeAlias =
  _test_functional_isParametersAsync("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => Promise<NativeAlias>) =>
      typia.functional.isParameters(p),
  );
