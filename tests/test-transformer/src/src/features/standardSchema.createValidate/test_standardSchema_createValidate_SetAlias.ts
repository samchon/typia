import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { SetAlias } from "../../structures/SetAlias";

export const test_standardSchema_createValidate_SetAlias = (): void => _test_standardSchema_validate(
    "SetAlias",
)<SetAlias>(
    SetAlias
)(typia.createValidate<SetAlias>());
