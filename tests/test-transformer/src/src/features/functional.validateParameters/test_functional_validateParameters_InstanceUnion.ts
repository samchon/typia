import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_validateParameters_InstanceUnion = (): void => _test_functional_validateParameters(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.validateParameters(p),
)