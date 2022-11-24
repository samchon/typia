import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_constant_atomic = _test_assert_type(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createAssertType<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
