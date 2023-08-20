import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagRange } from "../../structures/TagRange";

export const test_validateStringify_TagRange = _test_validateStringify(
    "TagRange",
    TagRange.generate,
    (input) => typia.validateStringify<TagRange>(input),
    TagRange.SPOILERS,
);
