import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_dynamic_constant = _test_validate(
    "dynamic constant",
    DynamicConstant.generate,
    TSON.createValidate<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
