import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_validateParameters_NativeAlias =
  _test_functional_validateParameters("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.validateParameters(p),
  );
