import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_createIs_InstanceUnion = (): void => _test_is(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)(typia.createIs<InstanceUnion>());
