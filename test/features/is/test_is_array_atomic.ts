import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is } from "./_test_is";

export const test_array_is_atomic = _test_is(
    "boolean array",
    ArrayAtomicSimple.generate(),
    (input) => TSON.is(input),
);
