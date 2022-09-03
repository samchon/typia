import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_tag_object_union = _test_stringify(
    "object union tag",
    TagObjectUnion.generate(),
    (input) => TSON.stringify(input),
);
