import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { SetUnion } from "../../structures/SetUnion";

export const test_createValidate_SetUnion = (): void => _test_validate(
    "SetUnion",
)<SetUnion>(
    SetUnion
)(typia.createValidate<SetUnion>());
