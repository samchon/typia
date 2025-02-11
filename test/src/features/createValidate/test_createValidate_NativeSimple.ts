import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createValidate_NativeSimple = _test_validate(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)(typia.createValidate<NativeSimple>());
