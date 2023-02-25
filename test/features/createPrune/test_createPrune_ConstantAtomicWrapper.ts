import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ConstantAtomicWrapper = _test_prune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createPrune<ConstantAtomicWrapper>(),
);
