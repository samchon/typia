import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { SetAlias } from "../../structures/SetAlias";

export const test_createValidate_SetAlias = _test_validate(
    "SetAlias",
)<SetAlias>(
    SetAlias
)(typia.createValidate<SetAlias>());
