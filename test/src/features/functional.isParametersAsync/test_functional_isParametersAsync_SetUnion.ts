import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_isParametersAsync_SetUnion = _test_functional_isParametersAsync(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.isParameters(p),
)