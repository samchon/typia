import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagObjectUnion = _test_validateClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validateClone(input),
    TagObjectUnion.SPOILERS,
);
