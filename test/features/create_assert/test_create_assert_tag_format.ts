import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_tag_format = _test_assert(
    "format tag",
    TagFormat.generate,
    TSON.createAssert<TagFormat>(),
    TagFormat.SPOILERS,
);
