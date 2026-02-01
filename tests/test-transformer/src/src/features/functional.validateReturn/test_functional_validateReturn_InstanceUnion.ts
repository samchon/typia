import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_validateReturn_InstanceUnion = (): void => _test_functional_validateReturn(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.validateReturn(p),
)