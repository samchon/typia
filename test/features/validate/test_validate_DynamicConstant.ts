import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicConstant = _test_validate(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => TSON.validate(input),
    DynamicConstant.SPOILERS,
);
