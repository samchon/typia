import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagObjectUnion = _test_isStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createIsStringify<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
