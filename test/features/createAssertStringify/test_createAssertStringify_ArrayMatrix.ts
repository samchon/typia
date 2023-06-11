import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
