import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createIsStringify_DynamicTemplate = _test_isStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createIsStringify<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
