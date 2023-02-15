import typia from "typia";

import { TagNaN } from "../../structures/TagNaN";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagNaN = _test_equals(
    "TagNaN",
    TagNaN.generate,
    typia.createEquals<TagNaN>(),
);
