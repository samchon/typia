import typia from "typia";

import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_InstanceUnion = _test_is(
    "InstanceUnion",
    InstanceUnion.generate,
    typia.createIs<InstanceUnion>(),
);
