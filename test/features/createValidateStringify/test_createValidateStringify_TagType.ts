import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagType } from "../../structures/TagType";

export const test_createValidateStringify_TagType = _test_validateStringify(
    "TagType",
    TagType.generate,
    typia.createValidateStringify<TagType>(),
    TagType.SPOILERS,
);
