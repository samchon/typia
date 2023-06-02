import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assertClone_DynamicJsonValue = _test_assertClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.assertClone(input),
    DynamicJsonValue.SPOILERS,
);
