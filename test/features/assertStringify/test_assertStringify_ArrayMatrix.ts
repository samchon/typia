import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.assertStringify<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
