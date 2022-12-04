import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicTemplate = _test_validateClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createValidateClone<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
