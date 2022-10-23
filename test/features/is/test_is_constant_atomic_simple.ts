import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "./_test_is";

export const test_is_constant_atomic = _test_is(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.is(input),
    ConstantAtomicSimple.SPOILERS,
);
