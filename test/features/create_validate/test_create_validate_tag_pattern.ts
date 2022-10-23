import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_pattern = _test_validate(
    "pattern tag",
    TagPattern.generate,
    TSON.createValidate<TagPattern>(),
    TagPattern.SPOILERS,
);
