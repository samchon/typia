import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_constant_atomic_union = _test_clone(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.clone(input),
);
