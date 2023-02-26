import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicTemplate = _test_isStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createIsStringify<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
