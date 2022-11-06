import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_clone } from "./_test_clone";

export const test_clone_constant_atomic = _test_clone(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.clone(input),
);
