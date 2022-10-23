import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_tag_length = _test_equals(
    "length tag",
    TagLength.generate,
    TSON.createEquals<TagLength>(),
);
