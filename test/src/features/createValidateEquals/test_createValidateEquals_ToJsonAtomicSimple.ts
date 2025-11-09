import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createValidateEquals_ToJsonAtomicSimple = (): void => _test_validateEquals(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)(typia.createValidateEquals<ToJsonAtomicSimple>());
