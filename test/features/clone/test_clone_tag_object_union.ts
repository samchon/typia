import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_object_union = _test_clone(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.clone(input),
);
