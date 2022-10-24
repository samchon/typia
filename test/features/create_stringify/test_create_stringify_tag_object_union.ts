import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_tag_object_union = _test_stringify(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createStringify<TagObjectUnion>(),
);
