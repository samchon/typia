import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_tag_format = _test_equals(
    "format tag",
    TagFormat.generate,
    TSON.createEquals<TagFormat>(),
);
