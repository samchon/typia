import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayAtomicSimple = _test_assertStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.assertStringify(input),
    ArrayAtomicSimple.SPOILERS,
);