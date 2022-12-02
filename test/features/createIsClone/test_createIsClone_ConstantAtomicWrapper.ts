import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ConstantAtomicWrapper = _test_isClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createIsClone<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
