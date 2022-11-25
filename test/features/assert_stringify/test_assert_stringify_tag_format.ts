import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_tag_format = _test_assert_stringify(
    "format tag",
    TagFormat.generate,
    (input) => TSON.assertStringify(input),
    TagFormat.SPOILERS,
);
