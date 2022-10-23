import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_length = _test_is(
    "length tag",
    TagLength.generate,
    TSON.createIs<TagLength>(),
    TagLength.SPOILERS,
);
