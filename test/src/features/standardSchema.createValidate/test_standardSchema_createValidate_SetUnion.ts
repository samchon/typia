import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { SetUnion } from "../../structures/SetUnion";

export const test_standardSchema_createValidate_SetUnion = _test_standardSchema_validate(
    "SetUnion",
)<SetUnion>(
    SetUnion
)(typia.createValidate<SetUnion>());
