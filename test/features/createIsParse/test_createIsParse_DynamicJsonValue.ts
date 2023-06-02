import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createIsParse_DynamicJsonValue = _test_isParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createIsParse<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
