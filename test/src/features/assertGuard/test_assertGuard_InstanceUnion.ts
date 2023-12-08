import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_assertGuard_InstanceUnion = _test_assertGuard(
  "InstanceUnion",
)<InstanceUnion>(InstanceUnion)((input) =>
  typia.assertGuard<InstanceUnion>(input),
);
