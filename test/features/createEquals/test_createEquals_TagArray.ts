import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagArray = _test_equals(
    "TagArray",
    TagArray.generate,
    typia.createEquals<TagArray>(),
);
