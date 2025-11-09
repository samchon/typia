import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { SetSimple } from "../../structures/SetSimple";

export const test_is_SetSimple = (): void => _test_is(
    "SetSimple",
)<SetSimple>(
    SetSimple
)((input) => typia.is<SetSimple>(input));
