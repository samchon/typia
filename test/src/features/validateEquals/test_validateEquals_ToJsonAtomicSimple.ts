import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_validateEquals_ToJsonAtomicSimple = (): void => _test_validateEquals(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((input) => typia.validateEquals<ToJsonAtomicSimple>(input));
