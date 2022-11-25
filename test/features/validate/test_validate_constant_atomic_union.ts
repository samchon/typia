import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_atomic_union = _test_validate(
    "constant atomic",
    ConstantAtomicUnion.generate,
    (input) => TSON.validate(input),
    ConstantAtomicUnion.SPOILERS,
);
