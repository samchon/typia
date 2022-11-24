import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_constant_atomic = _test_is_clone(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createIsClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
