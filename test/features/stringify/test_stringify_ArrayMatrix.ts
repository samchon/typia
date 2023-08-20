import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_stringify_ArrayMatrix = _test_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.stringify<ArrayMatrix>(input),
);
