import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayAny = _test_assertStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input) => TSON.assertStringify(input),
    ArrayAny.SPOILERS,
);