import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_createValidateClone_ConstantAtomicAbsorbed = (): void => _test_misc_validateClone(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)(typia.misc.createValidateClone<ConstantAtomicAbsorbed>());
