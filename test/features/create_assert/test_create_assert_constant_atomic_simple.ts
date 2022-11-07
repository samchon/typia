import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_constant_atomic = _test_assert(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createAssert<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
