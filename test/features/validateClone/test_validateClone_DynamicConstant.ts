import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicConstant = _test_validateClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => TSON.validateClone(input),
    DynamicConstant.SPOILERS,
);
