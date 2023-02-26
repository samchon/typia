import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createValidatePrune_ArrayMatrix = _test_validatePrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidatePrune<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
