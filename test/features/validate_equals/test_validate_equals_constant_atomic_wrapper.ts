import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_constant_atomic_wrapper =
    _test_validate_equals(
        "wrapped atomic constant",
        ConstantAtomicWrapper.generate,
        (input) => TSON.validateEquals(input),
    );
