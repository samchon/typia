import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayMatrix = _test_isParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createIsParse<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);