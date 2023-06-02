import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_assertStringify_ArrayAtomicSimple = _test_assertStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.assertStringify(input),
    ArrayAtomicSimple.SPOILERS,
);
