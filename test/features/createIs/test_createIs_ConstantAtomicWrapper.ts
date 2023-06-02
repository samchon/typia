import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createIs_ConstantAtomicWrapper = _test_is(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIs<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
