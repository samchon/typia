import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_tag_type = _test_assert_stringify(
    "type tag",
    TagType.generate,
    (input) => TSON.assertStringify(input),
    TagType.SPOILERS,
);
