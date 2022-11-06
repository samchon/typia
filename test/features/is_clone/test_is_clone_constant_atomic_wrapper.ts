import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_constant_atomic_wrapper = _test_is_clone(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.isClone(input),
    ConstantAtomicWrapper.SPOILERS,
);
