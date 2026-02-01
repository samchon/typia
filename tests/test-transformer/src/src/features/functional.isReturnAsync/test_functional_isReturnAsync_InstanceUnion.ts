import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_isReturnAsync_InstanceUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.isReturn(p),
)