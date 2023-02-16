import typia from "typia";

import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalArray = _test_validate(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.validate(input),
    FunctionalArray.SPOILERS,
);
