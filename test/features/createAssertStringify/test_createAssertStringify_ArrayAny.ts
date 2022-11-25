import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayAny = _test_assertStringify(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createAssertStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);