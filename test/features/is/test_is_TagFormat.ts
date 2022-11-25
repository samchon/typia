import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is } from "../internal/_test_is";

export const test_is_TagFormat = _test_is(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.is(input),
    TagFormat.SPOILERS,
);