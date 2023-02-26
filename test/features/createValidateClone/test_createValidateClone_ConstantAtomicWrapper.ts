import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createValidateClone_ConstantAtomicWrapper =
    _test_validateClone(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createValidateClone<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
