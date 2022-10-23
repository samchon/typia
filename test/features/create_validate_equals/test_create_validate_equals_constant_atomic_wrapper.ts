import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_constant_atomic_wrapper =
    _test_validate_equals(
        "wrapped atomic constant",
        ConstantAtomicWrapper.generate,
        TSON.createValidateEquals<ConstantAtomicWrapper>(),
    );
