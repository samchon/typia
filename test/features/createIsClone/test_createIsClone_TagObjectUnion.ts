import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagObjectUnion = _test_isClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createIsClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);