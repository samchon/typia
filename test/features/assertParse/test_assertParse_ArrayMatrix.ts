import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertParse_ArrayMatrix = _test_assertParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.assertParse<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
