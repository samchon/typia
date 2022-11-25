import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagArray = _test_isStringify(
    "TagArray",
    TagArray.generate,
    TSON.createIsStringify<TagArray>(),
    TagArray.SPOILERS,
);
