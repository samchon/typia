import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayAtomicSimple = _test_validateClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createValidateClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
