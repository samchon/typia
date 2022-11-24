import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is } from "../internal/_test_is";

export const test_create_is_tag_format = _test_is(
    "format tag",
    TagFormat.generate,
    TSON.createIs<TagFormat>(),
    TagFormat.SPOILERS,
);
