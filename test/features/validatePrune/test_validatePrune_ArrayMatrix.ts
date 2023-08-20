import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_validatePrune_ArrayMatrix = _test_validatePrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.validatePrune<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
