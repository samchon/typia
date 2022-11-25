import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ConstantAtomicSimple = _test_clone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.clone(input),
);
