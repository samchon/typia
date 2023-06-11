import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_TagRange = _test_isStringify(
    "TagRange",
    TagRange.generate,
    (input) => typia.isStringify(input),
    TagRange.SPOILERS,
);
