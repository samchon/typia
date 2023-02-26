import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validateClone_DynamicConstant = _test_validateClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validateClone(input),
    DynamicConstant.SPOILERS,
);
