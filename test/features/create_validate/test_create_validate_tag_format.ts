import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_tag_format = _test_validate(
    "format tag",
    TagFormat.generate,
    TSON.createValidate<TagFormat>(),
    TagFormat.SPOILERS,
);
