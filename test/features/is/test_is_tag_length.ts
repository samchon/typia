import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is } from "../internal/_test_is";

export const test_is_tag_length = _test_is(
    "length tag",
    TagLength.generate,
    (input) => TSON.is(input),
    TagLength.SPOILERS,
);
