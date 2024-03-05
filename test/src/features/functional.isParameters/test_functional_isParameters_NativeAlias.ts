import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_isParameters_NativeAlias =
  _test_functional_isParameters("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.isParameters(p),
  );
