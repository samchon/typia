import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagRange } from "../../structures/TagRange";

export const test_createIsStringify_TagRange = _test_isStringify(
    "TagRange",
    TagRange.generate,
    typia.createIsStringify<TagRange>(),
    TagRange.SPOILERS,
);
