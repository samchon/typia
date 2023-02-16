import typia from "typia";

import { TagArray } from "../../structures/TagArray";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagArray = _test_clone(
    "TagArray",
    TagArray.generate,
    typia.createClone<TagArray>(),
);
