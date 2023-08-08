import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_validateClone_TagObjectUnion = _test_misc_validateClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.misc.createValidateClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
