import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_validateClone_ConstantAtomicWrapper =
    _test_misc_validateClone(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.misc.createValidateClone<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
