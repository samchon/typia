import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createIsPrune_ConstantAtomicSimple = _test_misc_isPrune(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)(typia.misc.createIsPrune<ConstantAtomicSimple>());
