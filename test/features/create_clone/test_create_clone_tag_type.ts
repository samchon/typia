import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_type = _test_clone(
    "type tag",
    TagType.generate,
    TSON.createClone<TagType>(),
);
