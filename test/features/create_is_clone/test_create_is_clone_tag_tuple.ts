import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_tag_tuple = _test_is_clone(
    "tuple tag",
    TagTuple.generate,
    TSON.createIsClone<TagTuple>(),
    TagTuple.SPOILERS,
);
