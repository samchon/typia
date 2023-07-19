import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_prune_ConstantAtomicWrapper =
    _test_misc_prune<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
        typia.misc.createPrune<ConstantAtomicWrapper>(),
    );
