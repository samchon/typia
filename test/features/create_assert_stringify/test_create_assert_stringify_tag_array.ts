import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_tag_array = _test_assert_stringify(
    "array tag",
    TagArray.generate,
    TSON.createAssertStringify<TagArray>(),
    TagArray.SPOILERS,
);
