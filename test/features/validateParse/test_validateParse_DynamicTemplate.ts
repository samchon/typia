import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicTemplate = _test_validateParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.validateParse<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);
