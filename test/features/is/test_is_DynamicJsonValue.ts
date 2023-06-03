import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_is_DynamicJsonValue = _test_is(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.is(input),
    DynamicJsonValue.SPOILERS,
);
