import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_clone } from "./_test_clone";

export const test_clone_constant_atomic_wrapper = _test_clone(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.clone(input),
);
