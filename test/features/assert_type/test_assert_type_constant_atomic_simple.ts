import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_constant_atomic = _test_assert_type(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.assertType(input),
    ConstantAtomicSimple.SPOILERS,
);
