import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_array_atomic_simple = _test_stringify(
    "atomic array",
    ArrayAtomicSimple.generate(),
    (input) => TSON.stringify(input),
);
