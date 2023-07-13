import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_validatePrune_ArrayMatrix = _test_misc_validatePrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.misc.validatePrune(input),
    ArrayMatrix.SPOILERS,
);
