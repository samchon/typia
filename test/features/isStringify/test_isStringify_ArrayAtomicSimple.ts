import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayAtomicSimple = _test_isStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.isStringify(input),
    ArrayAtomicSimple.SPOILERS,
);