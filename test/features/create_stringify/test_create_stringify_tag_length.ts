import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_tag_length = _test_stringify(
    "length tag",
    TagLength.generate,
    TSON.createStringify<TagLength>(),
);
