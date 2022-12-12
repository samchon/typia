import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.assertStringify(input),
    ArrayMatrix.SPOILERS,
);