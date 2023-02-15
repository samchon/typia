import typia from "typia";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ToJsonUnion = _test_is(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createIs<ToJsonUnion>(),
);
