import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_equals_ConstantAtomicUnion = (): void => _test_equals(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)((input) => typia.equals<ConstantAtomicUnion>(input));
