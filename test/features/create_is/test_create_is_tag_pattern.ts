import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_pattern = _test_is(
    "pattern tag",
    TagPattern.generate,
    TSON.createIs<TagPattern>(),
    TagPattern.SPOILERS,
);
