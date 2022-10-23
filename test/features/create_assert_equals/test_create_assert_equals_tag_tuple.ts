import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_tag_tuple = _test_assert_equals(
    "tuple tag",
    TagTuple.generate,
    TSON.createAssertEquals<TagTuple>(),
);
