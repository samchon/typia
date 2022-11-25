import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_constant_atomic = _test_assert_stringify(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.assertStringify(input),
    ConstantAtomicSimple.SPOILERS,
);
