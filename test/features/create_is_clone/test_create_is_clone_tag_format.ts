import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_tag_format = _test_is_clone(
    "format tag",
    TagFormat.generate,
    TSON.createIsClone<TagFormat>(),
    TagFormat.SPOILERS,
);
