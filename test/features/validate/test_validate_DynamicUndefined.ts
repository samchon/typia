import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicUndefined = _test_validate(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.validate(input),
    DynamicUndefined.SPOILERS,
);
