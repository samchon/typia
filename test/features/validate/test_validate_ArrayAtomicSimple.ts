import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArrayAtomicSimple = _test_validate(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.validate(input),
    ArrayAtomicSimple.SPOILERS,
);
