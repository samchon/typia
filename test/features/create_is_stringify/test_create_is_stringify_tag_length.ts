import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_tag_length = _test_is_stringify(
    "length tag",
    TagLength.generate,
    TSON.createIsStringify<TagLength>(),
    TagLength.SPOILERS,
);
