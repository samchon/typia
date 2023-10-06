import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createAssertPrune_ConstantAtomicSimple =
    _test_misc_assertPrune("ConstantAtomicSimple")<ConstantAtomicSimple>(
        ConstantAtomicSimple,
    )(typia.misc.createAssertPrune<ConstantAtomicSimple>());
