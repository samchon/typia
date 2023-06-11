import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertParse_DynamicTemplate = _test_assertParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createAssertParse<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
