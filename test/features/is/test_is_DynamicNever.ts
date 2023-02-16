import typia from "typia";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicNever = _test_is(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.is(input),
    DynamicNever.SPOILERS,
);
