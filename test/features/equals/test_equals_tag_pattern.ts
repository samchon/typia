import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_tag_pattern = _test_equals(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.equals(input),
);
