import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagRange = _test_isStringify(
    "TagRange",
    TagRange.generate,
    TSON.createIsStringify<TagRange>(),
    TagRange.SPOILERS,
);