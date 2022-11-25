import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ConstantAtomicUnion = _test_clone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    TSON.createClone<ConstantAtomicUnion>(),
);
