import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_tag_length = _test_assert(
    "length tag",
    TagLength.generate,
    (input) => TSON.assert(input),
    TagLength.SPOILERS,
);
