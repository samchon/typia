import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_constant_atomic = _test_is_clone(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.isClone(input),
    ConstantAtomicSimple.SPOILERS,
);
