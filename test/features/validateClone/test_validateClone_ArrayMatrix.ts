import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_validateClone_ArrayMatrix = _test_validateClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.validateClone(input),
    ArrayMatrix.SPOILERS,
);
