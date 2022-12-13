import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagObjectUnion = _test_isParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createIsParse<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);