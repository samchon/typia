import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_dynamic_template = _test_validate(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createValidate<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
