import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_validateFunction_InstanceUnion = (): void => _test_functional_validateFunction(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.validateFunction(p),
)