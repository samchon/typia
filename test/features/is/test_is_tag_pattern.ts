import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is } from "./_test_is";

export const test_is_tag_pattern = _test_is(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.is(input),
    TagPattern.SPOILERS,
);
