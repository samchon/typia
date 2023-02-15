import typia from "typia";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagInfinite = _test_validate(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.validate(input),
    TagInfinite.SPOILERS,
);
