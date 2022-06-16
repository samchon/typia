import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert } from "./_test_assert";

export const test_array_assert_atomic = _test_assert(
    "boolean array",
    ArrayAtomicSimple.generate(),
    (input) => TSON.assert(input),
);
