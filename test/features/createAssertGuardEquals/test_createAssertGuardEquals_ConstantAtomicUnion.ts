import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertGuardEquals_ConstantAtomicUnion =
    _test_assertGuardEquals("ConstantAtomicUnion")<ConstantAtomicUnion>(
        ConstantAtomicUnion,
    )(typia.createAssertGuardEquals<ConstantAtomicUnion>());
