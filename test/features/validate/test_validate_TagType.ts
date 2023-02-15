import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagType = _test_validate(
    "TagType",
    TagType.generate,
    (input) => typia.validate(input),
    TagType.SPOILERS,
);
