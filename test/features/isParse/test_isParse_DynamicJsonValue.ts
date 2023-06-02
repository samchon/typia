import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_isParse_DynamicJsonValue = _test_isParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.isParse<DynamicJsonValue>(input),
    DynamicJsonValue.SPOILERS,
);
