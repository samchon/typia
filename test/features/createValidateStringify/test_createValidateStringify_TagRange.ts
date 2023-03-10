import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagRange } from "../../structures/TagRange";

export const test_createValidateStringify_TagRange = _test_validateStringify(
    "TagRange",
    TagRange.generate,
    typia.createValidateStringify<TagRange>(),
    TagRange.SPOILERS,
);
