import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_clone_ConstantAtomicWrapper = _test_misc_clone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.misc.createClone<ConstantAtomicWrapper>(),
);
