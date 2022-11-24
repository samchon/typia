import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tag_array = _test_is_stringify(
    "array tag",
    TagArray.generate,
    TSON.createIsStringify<TagArray>(),
    TagArray.SPOILERS,
);
