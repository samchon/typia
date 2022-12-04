import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ConstantAtomicUnion = _test_validateParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.validateParse<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
