import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_is_ArrayMatrix = _test_is(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.is(input),
    ArrayMatrix.SPOILERS,
);
