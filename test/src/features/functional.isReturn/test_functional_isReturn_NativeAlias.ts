import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_isReturn_NativeAlias = _test_functional_isReturn(
  "NativeAlias",
)(NativeAlias)((p: (input: NativeAlias) => NativeAlias) =>
  typia.functional.isReturn(p),
);
