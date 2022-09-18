import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_tag_length = _test_validate_equals(
    "length tag",
    TagLength.generate,
    (input) => TSON.validateEquals(input),
);
