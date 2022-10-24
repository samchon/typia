import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_tag_pattern = _test_assert_stringify(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.assertStringify(input),
    TagPattern.SPOILERS,
);
