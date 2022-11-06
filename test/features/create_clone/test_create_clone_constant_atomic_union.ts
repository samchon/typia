import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_constant_atomic_union = _test_clone(
    "constant atomic",
    ConstantAtomicUnion.generate,
    TSON.createClone<ConstantAtomicUnion>(),
);
