import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ConstantAtomicSimple = _test_assertClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.assertClone(input),
    ConstantAtomicSimple.SPOILERS,
);
