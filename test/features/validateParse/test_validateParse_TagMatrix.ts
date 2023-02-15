import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagMatrix = _test_validateParse(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validateParse<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
