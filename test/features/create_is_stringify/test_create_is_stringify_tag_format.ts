import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tag_format = _test_is_stringify(
    "format tag",
    TagFormat.generate,
    TSON.createIsStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
