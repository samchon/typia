import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tag_type = _test_is_stringify(
    "type tag",
    TagType.generate,
    TSON.createIsStringify<TagType>(),
    TagType.SPOILERS,
);
