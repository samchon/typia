import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_isPrune_ConstantAtomicWrapper =
    _test_misc_isPrune<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
        typia.misc.createIsPrune<ConstantAtomicWrapper>(),
    );
