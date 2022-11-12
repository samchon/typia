import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_constant_atomic = _test_assert_clone(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createAssertClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
