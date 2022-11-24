import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_atomic_union = _test_validate(
    "constant atomic",
    ConstantAtomicUnion.generate,
    TSON.createValidate<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
