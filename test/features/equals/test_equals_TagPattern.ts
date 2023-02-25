import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagPattern = _test_equals(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.equals(input),
);
