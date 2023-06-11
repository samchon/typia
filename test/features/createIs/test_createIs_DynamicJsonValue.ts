import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_DynamicJsonValue = _test_is(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createIs<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
