import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_isReturnAsync_SetUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.isReturn(p),
)