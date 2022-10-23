import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_tag_pattern = _test_equals(
    "pattern tag",
    TagPattern.generate,
    TSON.createEquals<TagPattern>(),
);
