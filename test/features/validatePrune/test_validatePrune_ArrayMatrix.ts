import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ArrayMatrix = _test_validatePrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.validatePrune(input),
    ArrayMatrix.SPOILERS,
);
