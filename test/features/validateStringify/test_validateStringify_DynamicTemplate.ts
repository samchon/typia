import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_validateStringify_DynamicTemplate = _test_validateStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.validateStringify(input),
    DynamicTemplate.SPOILERS,
);
