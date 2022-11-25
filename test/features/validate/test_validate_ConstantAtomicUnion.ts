import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ConstantAtomicUnion = _test_validate(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.validate(input),
    ConstantAtomicUnion.SPOILERS,
);