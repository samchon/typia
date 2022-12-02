import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArrayAtomicSimple = _test_validateEquals(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.validateEquals(input),
);
