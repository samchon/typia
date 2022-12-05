import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArrayAtomicSimple = _test_validateStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.validateStringify(input),
    ArrayAtomicSimple.SPOILERS,
);
