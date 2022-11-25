import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayAtomicSimple = _test_validateEquals(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createValidateEquals<ArrayAtomicSimple>(),
);