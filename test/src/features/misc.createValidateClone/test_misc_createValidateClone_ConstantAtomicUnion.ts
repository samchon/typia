import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createValidateClone_ConstantAtomicUnion = (): void => _test_misc_validateClone(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.misc.createValidateClone<ConstantAtomicUnion>());
