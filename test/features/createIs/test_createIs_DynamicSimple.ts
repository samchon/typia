import typia from "typia";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicSimple = _test_is(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createIs<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
