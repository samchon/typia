import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validate } from "./_test_validate";

export const test_validate_dynamic_constant = _test_validate(
    "dynamic constant",
    DynamicConstant.generate,
    (input) => TSON.validate(input),
    DynamicConstant.SPOILERS,
);
