import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagType } from "../../structures/TagType";

export const test_validateStringify_TagType = _test_validateStringify(
    "TagType",
    TagType.generate,
    (input) => typia.validateStringify<TagType>(input),
    TagType.SPOILERS,
);
