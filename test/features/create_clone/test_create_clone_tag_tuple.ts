import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_tuple = _test_clone(
    "tuple tag",
    TagTuple.generate,
    TSON.createClone<TagTuple>(),
);
