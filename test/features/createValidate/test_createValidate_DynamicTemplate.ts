import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicTemplate = _test_validate(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createValidate<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
