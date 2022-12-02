import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayAtomicSimple = _test_isStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createIsStringify<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
