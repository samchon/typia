import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ConstantAtomicAbsorbed = (): void => _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)((input) => typia.misc.assertClone<ConstantAtomicAbsorbed>(input));
