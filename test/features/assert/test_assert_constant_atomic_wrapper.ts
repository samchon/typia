import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assert } from "./_test_assert";

export const test_assert_constant_atomic_wrapper = _test_assert(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assertType(input),
);
