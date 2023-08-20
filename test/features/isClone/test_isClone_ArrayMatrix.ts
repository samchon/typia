import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_isClone_ArrayMatrix = _test_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.isClone<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
