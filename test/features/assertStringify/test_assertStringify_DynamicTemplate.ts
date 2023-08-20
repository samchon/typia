import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertStringify_DynamicTemplate = _test_assertStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertStringify<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);
