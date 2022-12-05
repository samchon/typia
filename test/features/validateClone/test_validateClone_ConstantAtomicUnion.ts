import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ConstantAtomicUnion = _test_validateClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.validateClone(input),
    ConstantAtomicUnion.SPOILERS,
);
