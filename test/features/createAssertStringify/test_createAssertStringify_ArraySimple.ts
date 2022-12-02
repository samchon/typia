import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArraySimple = _test_assertStringify(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createAssertStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
