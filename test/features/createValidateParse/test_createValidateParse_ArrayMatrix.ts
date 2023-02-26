import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createValidateParse_ArrayMatrix = _test_validateParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidateParse<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
