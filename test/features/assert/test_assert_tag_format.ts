import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_format = _test_assert(
    "format tag",
    TagFormat.generate,
    (input) => TSON.assert(input),
    TagFormat.SPOILERS,
);
