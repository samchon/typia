import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayMatrix = _test_assertClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);