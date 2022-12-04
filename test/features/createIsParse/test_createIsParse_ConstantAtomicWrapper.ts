import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ConstantAtomicWrapper = _test_isParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createIsParse<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
