import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "./_test_is";

export const test_is_constant_atomic = _test_is(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = true as false),
        (input) => (input[1] = false as true),
        (input) => (input[2] = 3 as 2),
        (input) => (input[3] = "two" as "three"),
    ],
);
