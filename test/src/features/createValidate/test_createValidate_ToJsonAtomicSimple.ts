import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createValidate_ToJsonAtomicSimple = (): void => _test_validate(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)(typia.createValidate<ToJsonAtomicSimple>());
