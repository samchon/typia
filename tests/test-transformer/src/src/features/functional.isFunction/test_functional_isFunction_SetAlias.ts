import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_isFunction_SetAlias = (): void => _test_functional_isFunction(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => SetAlias) => typia.functional.isFunction(p),
)