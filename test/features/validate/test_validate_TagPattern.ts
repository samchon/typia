import typia from "typia";

import { TagPattern } from "../../structures/TagPattern";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagPattern = _test_validate(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.validate(input),
    TagPattern.SPOILERS,
);
