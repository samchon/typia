import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_standardSchema_createValidate_ToJsonAtomicSimple = _test_standardSchema_validate(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)(typia.createValidate<ToJsonAtomicSimple>());
