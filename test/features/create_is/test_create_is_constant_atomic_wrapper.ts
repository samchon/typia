import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_is } from "../internal/_test_is";

export const test_create_is_constant_atomic_wrapper = _test_is(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    TSON.createIs<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
