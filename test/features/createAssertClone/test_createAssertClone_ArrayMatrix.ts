import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertClone_ArrayMatrix = _test_assertClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertClone<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
