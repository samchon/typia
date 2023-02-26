import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createIsStringify_TagObjectUnion = _test_isStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createIsStringify<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
