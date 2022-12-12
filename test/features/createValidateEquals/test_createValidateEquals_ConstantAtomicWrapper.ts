import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ConstantAtomicWrapper =
    _test_validateEquals(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createValidateEquals<ConstantAtomicWrapper>(),
    );
