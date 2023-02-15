import typia from "typia";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArrayAny = _test_validate(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.validate(input),
    ArrayAny.SPOILERS,
);
