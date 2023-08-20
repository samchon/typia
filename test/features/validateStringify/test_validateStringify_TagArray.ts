import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagArray } from "../../structures/TagArray";

export const test_validateStringify_TagArray = _test_validateStringify(
    "TagArray",
    TagArray.generate,
    (input) => typia.validateStringify<TagArray>(input),
    TagArray.SPOILERS,
);
