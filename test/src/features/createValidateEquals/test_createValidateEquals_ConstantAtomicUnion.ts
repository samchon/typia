import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createValidateEquals_ConstantAtomicUnion = _test_validateEquals(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.createValidateEquals<ConstantAtomicUnion>());
