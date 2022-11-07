import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_array = _test_assert_type(
    "array tag",
    TagArray.generate,
    TSON.createAssertType<TagArray>(),
    TagArray.SPOILERS,
);
