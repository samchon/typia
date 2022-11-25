import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagObjectUnion = _test_clone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createClone<TagObjectUnion>(),
);
