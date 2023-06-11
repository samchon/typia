import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagArray } from "../../structures/TagArray";

export const test_isStringify_TagArray = _test_isStringify(
    "TagArray",
    TagArray.generate,
    (input) => typia.isStringify(input),
    TagArray.SPOILERS,
);
