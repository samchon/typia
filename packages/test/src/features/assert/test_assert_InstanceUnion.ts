import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_assert_InstanceUnion = _test_assert(
  "InstanceUnion",
)<InstanceUnion>(InstanceUnion)((input) => typia.assert<InstanceUnion>(input));
