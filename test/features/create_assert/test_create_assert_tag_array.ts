import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_tag_array = _test_assert(
    "array tag",
    TagArray.generate,
    TSON.createAssertType<TagArray>(),
    TagArray.SPOILERS,
);
