import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_tag_length = _test_stringify(
    "length tag",
    TagLength.generate(),
    (input) => TSON.stringify(input),
);
