import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagMatrix = _test_validate(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validate(input),
    TagMatrix.SPOILERS,
);
