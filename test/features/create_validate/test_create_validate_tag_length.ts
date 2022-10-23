import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_length = _test_validate(
    "length tag",
    TagLength.generate,
    TSON.createValidate<TagLength>(),
    TagLength.SPOILERS,
);
