import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createPrune_ConstantAtomicWrapper = _test_prune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createPrune<ConstantAtomicWrapper>(),
);
