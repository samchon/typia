import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { SetSimple } from "../../structures/SetSimple";

export const test_standardSchema_createValidate_SetSimple = (): void => _test_standardSchema_validate(
    "SetSimple",
)<SetSimple>(
    SetSimple
)(typia.createValidate<SetSimple>());
