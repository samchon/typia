import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicTemplate = _test_validateParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createValidateParse<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
