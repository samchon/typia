import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantAtomicSimple = _test_is(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.is(input),
    ConstantAtomicSimple.SPOILERS,
);