import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertClone_DynamicTemplate = _test_assertClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertClone(input),
    DynamicTemplate.SPOILERS,
);
