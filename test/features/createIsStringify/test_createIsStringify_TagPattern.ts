import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagPattern = _test_isStringify(
    "TagPattern",
    TagPattern.generate,
    TSON.createIsStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
