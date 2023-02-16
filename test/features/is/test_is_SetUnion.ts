import typia from "typia";

import { SetUnion } from "../../structures/SetUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_SetUnion = _test_is(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.is(input),
    SetUnion.SPOILERS,
);
