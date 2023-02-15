import typia from "typia";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicNever = _test_validate(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.validate(input),
    DynamicNever.SPOILERS,
);
