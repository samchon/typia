import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicConstant = _test_is(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createIs<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
