import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { SetUnion } from "../../structures/SetUnion";

export const test_validate_SetUnion = (): void => _test_validate(
    "SetUnion",
)<SetUnion>(
    SetUnion
)((input) => typia.validate<SetUnion>(input));
