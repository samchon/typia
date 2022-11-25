import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicTemplate = _test_assertStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createAssertStringify<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
