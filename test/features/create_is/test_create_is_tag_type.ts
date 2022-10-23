import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_type = _test_is(
    "type tag",
    TagType.generate,
    TSON.createIs<TagType>(),
    TagType.SPOILERS,
);
