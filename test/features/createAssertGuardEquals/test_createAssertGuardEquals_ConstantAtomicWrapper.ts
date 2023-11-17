import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertGuardEquals_ConstantAtomicWrapper =
    _test_assertGuardEquals("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper,
    )(typia.createAssertGuardEquals<ConstantAtomicWrapper>());
