import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_standardSchema_createValidate_NativeSimple = (): void => _test_standardSchema_validate(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)(typia.createValidate<NativeSimple>());
