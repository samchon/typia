import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_compare_equals_InstanceUnion = _test_compare_equals(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)((a, b) => typia.compare.equals<InstanceUnion>(a, b));
