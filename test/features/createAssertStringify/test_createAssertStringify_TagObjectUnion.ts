import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createAssertStringify_TagObjectUnion = _test_assertStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertStringify<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
