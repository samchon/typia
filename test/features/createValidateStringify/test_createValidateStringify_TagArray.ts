import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagArray } from "../../structures/TagArray";

export const test_createValidateStringify_TagArray = _test_validateStringify(
    "TagArray",
    TagArray.generate,
    typia.createValidateStringify<TagArray>(),
    TagArray.SPOILERS,
);
