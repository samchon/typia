import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_isClone_DynamicTemplate = _test_isClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.isClone(input),
    DynamicTemplate.SPOILERS,
);
