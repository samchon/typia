import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_tag_array = _test_assert_equals(
    "array tag",
    TagArray.generate,
    TSON.createAssertEquals<TagArray>(),
);
