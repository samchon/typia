import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayMatrix = _test_validateClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidateClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
