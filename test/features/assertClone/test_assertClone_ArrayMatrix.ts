import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayMatrix = _test_assertClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.assertClone(input),
    ArrayMatrix.SPOILERS,
);