import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_isClone_ConstantAtomicWrapper =
    _test_misc_isClone<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
        typia.misc.createIsClone<ConstantAtomicWrapper>(),
    );
