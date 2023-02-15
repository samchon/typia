import typia from "typia";

import { TagNaN } from "../../structures/TagNaN";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagNaN = _test_validateEquals(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.validateEquals(input),
);
