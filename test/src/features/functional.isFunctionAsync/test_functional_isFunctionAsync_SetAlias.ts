import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_isFunctionAsync_SetAlias = (): Promise<void> => _test_functional_isFunctionAsync(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => Promise<SetAlias>) =>
    typia.functional.isFunction(p),
)