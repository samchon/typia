import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_TagArray = _test_isStringify(
    "TagArray",
    TagArray.generate,
    (input) => typia.isStringify(input),
    TagArray.SPOILERS,
);
