import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_tag_pattern = _test_validate_equals(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.validateEquals(input),
);
