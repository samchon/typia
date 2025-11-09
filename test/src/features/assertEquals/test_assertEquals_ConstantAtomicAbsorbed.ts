import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_assertEquals_ConstantAtomicAbsorbed = (): void => _test_assertEquals(TypeGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)((input) => typia.assertEquals<ConstantAtomicAbsorbed>(input));
