import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_tag_tuple = _test_assert_stringify(
    "tuple tag",
    TagTuple.generate,
    TSON.createAssertStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
