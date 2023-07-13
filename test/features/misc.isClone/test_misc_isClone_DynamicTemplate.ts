import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_isClone_DynamicTemplate = _test_misc_isClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.misc.isClone(input),
    DynamicTemplate.SPOILERS,
);
