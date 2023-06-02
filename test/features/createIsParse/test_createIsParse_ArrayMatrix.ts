import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createIsParse_ArrayMatrix = _test_isParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createIsParse<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
