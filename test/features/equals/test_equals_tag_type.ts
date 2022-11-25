import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_tag_type = _test_equals(
    "type tag",
    TagType.generate,
    (input) => TSON.equals(input),
);
