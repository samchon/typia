import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagObjectUnion = _test_validateClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidateClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
