import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_constant_atomic = _test_validate(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createValidate<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
