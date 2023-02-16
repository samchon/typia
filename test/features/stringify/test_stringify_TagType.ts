import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagType = _test_stringify(
    "TagType",
    TagType.generate,
    (input) => typia.stringify(input),
);
