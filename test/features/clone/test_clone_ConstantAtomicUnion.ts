import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ConstantAtomicUnion = _test_clone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.clone(input),
);
