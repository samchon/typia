import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tag_type = _test_stringify(
    "type tag",
    TagType.generate,
    (input) => TSON.stringify(input),
);
