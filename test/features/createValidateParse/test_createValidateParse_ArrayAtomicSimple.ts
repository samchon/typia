import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArrayAtomicSimple = _test_validateParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createValidateParse<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
