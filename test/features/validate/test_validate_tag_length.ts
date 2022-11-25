import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_tag_length = _test_validate(
    "length tag",
    TagLength.generate,
    (input) => TSON.validate(input),
    TagLength.SPOILERS,
);
