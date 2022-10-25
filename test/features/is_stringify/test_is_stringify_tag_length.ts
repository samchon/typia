import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_tag_length = _test_is_stringify(
    "length tag",
    TagLength.generate,
    (input) => TSON.isStringify(input),
    TagLength.SPOILERS,
);
