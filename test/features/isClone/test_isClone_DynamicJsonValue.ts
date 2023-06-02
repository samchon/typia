import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_isClone_DynamicJsonValue = _test_isClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.isClone(input),
    DynamicJsonValue.SPOILERS,
);
