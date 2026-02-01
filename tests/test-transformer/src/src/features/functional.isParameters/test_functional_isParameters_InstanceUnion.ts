import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_isParameters_InstanceUnion = (): void => _test_functional_isParameters(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => InstanceUnion) => typia.functional.isParameters(p),
)