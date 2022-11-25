import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is } from "../internal/_test_is";

export const test_is_tag_format = _test_is(
    "format tag",
    TagFormat.generate,
    (input) => TSON.is(input),
    TagFormat.SPOILERS,
);
