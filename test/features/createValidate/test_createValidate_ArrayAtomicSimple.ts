import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayAtomicSimple = _test_validate(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createValidate<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);