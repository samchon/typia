import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagTuple = _test_validateParse(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validateParse<TagTuple>(input),
    TagTuple.SPOILERS,
);
