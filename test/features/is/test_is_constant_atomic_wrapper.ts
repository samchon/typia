import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_is } from "./_test_is";

export const test_is_constant_atomic_wrapper = _test_is(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.is(input),
);
