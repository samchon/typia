import typia from "typia";

import { TagFormat } from "../../structures/TagFormat";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagFormat = _test_validate(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validate(input),
    TagFormat.SPOILERS,
);
