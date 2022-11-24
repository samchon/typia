import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_constant_atomic_wrapper = _test_clone(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    TSON.createClone<ConstantAtomicWrapper>(),
);
