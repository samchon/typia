import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_validateClone_ArrayMatrix = _test_misc_validateClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.misc.createValidateClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
