import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_isParse_ArrayMatrix = _test_isParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.isParse<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
