import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_tag_pattern = _test_is_stringify(
    "pattern tag",
    TagPattern.generate,
    TSON.createIsStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
