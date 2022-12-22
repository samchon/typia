import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ConstantAtomicWrapper = _test_is(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIs<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
