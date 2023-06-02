import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_createValidateStringify_TagPattern = _test_validateStringify(
    "TagPattern",
    TagPattern.generate,
    typia.createValidateStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
