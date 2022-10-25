import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_tag_object_union = _test_is_stringify(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.isStringify(input),
    TagObjectUnion.SPOILERS,
);
