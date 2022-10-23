import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_type = _test_validate(
    "type tag",
    TagType.generate,
    (input) => TSON.validate(input),
    TagType.SPOILERS,
);
