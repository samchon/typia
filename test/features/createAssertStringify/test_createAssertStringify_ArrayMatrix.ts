import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);