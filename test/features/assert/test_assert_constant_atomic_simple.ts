import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_constant_atomic = _test_assert(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.assertType(input),
);
