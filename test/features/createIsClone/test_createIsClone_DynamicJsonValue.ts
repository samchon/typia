import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createIsClone_DynamicJsonValue = _test_isClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createIsClone<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
