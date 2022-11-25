import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_array_atomic_simple = _test_validate(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.validate(input),
    ArrayAtomicSimple.SPOILERS,
);
