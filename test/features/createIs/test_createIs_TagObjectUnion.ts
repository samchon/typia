import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagObjectUnion = _test_is(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createIs<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);