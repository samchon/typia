import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertParse_DynamicTemplate = _test_assertParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertParse<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);
