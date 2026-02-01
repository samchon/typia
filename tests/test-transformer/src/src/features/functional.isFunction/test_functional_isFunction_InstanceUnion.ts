import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_isFunction_InstanceUnion = (): void => _test_functional_isFunction(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.isFunction(p),
)