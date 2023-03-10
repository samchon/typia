import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_isStringify_DynamicTemplate = _test_isStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.isStringify(input),
    DynamicTemplate.SPOILERS,
);
