import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_tag_tuple = _test_assert_clone(
    "tuple tag",
    TagTuple.generate,
    TSON.createAssertClone<TagTuple>(),
    TagTuple.SPOILERS,
);
