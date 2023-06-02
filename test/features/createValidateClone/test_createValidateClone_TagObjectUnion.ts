import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createValidateClone_TagObjectUnion = _test_validateClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidateClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
