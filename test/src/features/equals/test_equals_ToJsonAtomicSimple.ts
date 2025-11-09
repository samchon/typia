import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_equals_ToJsonAtomicSimple = (): void => _test_equals(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((input) => typia.equals<ToJsonAtomicSimple>(input));
