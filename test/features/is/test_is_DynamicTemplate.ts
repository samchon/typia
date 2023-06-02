import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_is_DynamicTemplate = _test_is(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.is(input),
    DynamicTemplate.SPOILERS,
);
