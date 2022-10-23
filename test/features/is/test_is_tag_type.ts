import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is } from "./_test_is";

export const test_is_tag_type = _test_is(
    "type tag",
    TagType.generate,
    (input) => TSON.is(input),
    TagType.SPOILERS,
);
