import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_equals_ArrayMatrix = _test_equals(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.equals<ArrayMatrix>(input),
);
