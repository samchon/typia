import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_tag_type = _test_validate(
    "type tag",
    TagType.generate,
    TSON.createValidate<TagType>(),
    TagType.SPOILERS,
);
