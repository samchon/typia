import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tag_pattern = _test_stringify(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.stringify(input),
);
