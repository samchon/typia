import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_pattern = _test_clone(
    "pattern tag",
    TagPattern.generate,
    TSON.createClone<TagPattern>(),
);
