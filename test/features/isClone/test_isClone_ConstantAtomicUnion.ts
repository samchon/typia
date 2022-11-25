import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ConstantAtomicUnion = _test_isClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.isClone(input),
    ConstantAtomicUnion.SPOILERS,
);