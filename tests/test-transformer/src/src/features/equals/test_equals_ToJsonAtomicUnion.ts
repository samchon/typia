import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_equals_ToJsonAtomicUnion = (): void => _test_equals(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)((input) => typia.equals<ToJsonAtomicUnion>(input));
