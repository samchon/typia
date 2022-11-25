import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_tag_array = _test_assert_stringify(
    "array tag",
    TagArray.generate,
    (input) => TSON.assertStringify(input),
    TagArray.SPOILERS,
);
