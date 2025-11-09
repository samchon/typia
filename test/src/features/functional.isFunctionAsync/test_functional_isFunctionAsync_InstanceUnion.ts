import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_isFunctionAsync_InstanceUnion = (): Promise<void> => _test_functional_isFunctionAsync(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.isFunction(p),
)