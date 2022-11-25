import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createAssertStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
