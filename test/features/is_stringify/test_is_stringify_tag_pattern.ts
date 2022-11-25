import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_tag_pattern = _test_is_stringify(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.isStringify(input),
    TagPattern.SPOILERS,
);
