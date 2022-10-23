import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_array_atomic_simple = _test_validate(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createValidate<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
