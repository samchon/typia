import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_constant_atomic_wrapper = _test_validate(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    TSON.createValidate<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
