import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createClone_ConstantAtomicWrapper = _test_clone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createClone<ConstantAtomicWrapper>(),
);
