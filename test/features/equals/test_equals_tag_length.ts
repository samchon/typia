import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_equals } from "./_test_equals";

export const test_equals_tag_length = _test_equals(
    "length tag",
    TagLength.generate,
    (input) => TSON.equals(input),
);
