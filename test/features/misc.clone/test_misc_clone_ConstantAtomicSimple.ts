import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_clone_ConstantAtomicSimple = _test_misc_clone(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)((input) => typia.misc.clone<ConstantAtomicSimple>(input));
