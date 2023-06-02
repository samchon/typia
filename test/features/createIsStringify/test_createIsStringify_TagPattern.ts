import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_createIsStringify_TagPattern = _test_isStringify(
    "TagPattern",
    TagPattern.generate,
    typia.createIsStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
