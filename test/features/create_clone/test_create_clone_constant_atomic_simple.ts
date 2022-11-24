import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_constant_atomic = _test_clone(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createClone<ConstantAtomicSimple>(),
);
