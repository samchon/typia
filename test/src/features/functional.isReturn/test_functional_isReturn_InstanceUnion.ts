import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_isReturn_InstanceUnion = _test_functional_isReturn(
  "InstanceUnion",
)(InstanceUnion)((p: (input: InstanceUnion) => InstanceUnion) =>
  typia.functional.isReturn(p),
);
