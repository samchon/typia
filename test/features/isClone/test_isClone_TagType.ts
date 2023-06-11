import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_TagType = _test_isClone(
    "TagType",
    TagType.generate,
    (input) => typia.isClone(input),
    TagType.SPOILERS,
);
