import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_tag_type = _test_assert(
    "type tag",
    TagType.generate,
    (input) => TSON.assert(input),
    TagType.SPOILERS,
);
