import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertStringify_DynamicTemplate = _test_assertStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssertStringify<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
