import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createIsStringify_ArrayAtomicSimple = _test_isStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createIsStringify<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
