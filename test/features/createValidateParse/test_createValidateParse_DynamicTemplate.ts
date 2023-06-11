import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createValidateParse_DynamicTemplate = _test_validateParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidateParse<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
