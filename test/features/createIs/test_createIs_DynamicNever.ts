import typia from "typia";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicNever = _test_is(
    "DynamicNever",
    DynamicNever.generate,
    typia.createIs<DynamicNever>(),
    DynamicNever.SPOILERS,
);
