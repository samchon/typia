import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ConstantAtomicSimple = _test_isClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.isClone(input),
    ConstantAtomicSimple.SPOILERS,
);