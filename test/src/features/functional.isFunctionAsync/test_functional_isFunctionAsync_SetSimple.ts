import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_isFunctionAsync_SetSimple = _test_functional_isFunctionAsync(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.isFunction(p),
)