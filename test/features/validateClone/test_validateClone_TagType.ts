import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_TagType = _test_validateClone(
    "TagType",
    TagType.generate,
    (input) => typia.validateClone(input),
    TagType.SPOILERS,
);
