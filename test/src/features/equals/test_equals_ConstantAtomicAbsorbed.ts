import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_equals_ConstantAtomicAbsorbed = _test_equals(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)((input) => typia.equals<ConstantAtomicAbsorbed>(input));
