import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate } from "./_test_validate";

export const test_validate_constant_atomic_wrapper = _test_validate(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.validate(input),
    ConstantAtomicWrapper.SPOILERS,
);
