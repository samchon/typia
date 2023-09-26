import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createValidateEquals_ConstantAtomicWrapper =
    _test_validateEquals("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper,
    )(typia.createValidateEquals<ConstantAtomicWrapper>());
