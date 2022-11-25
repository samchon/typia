import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_constant_atomic = _test_validate(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.validate(input),
    ConstantAtomicSimple.SPOILERS,
);
