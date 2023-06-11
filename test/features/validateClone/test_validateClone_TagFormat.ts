import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_TagFormat = _test_validateClone(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validateClone(input),
    TagFormat.SPOILERS,
);
