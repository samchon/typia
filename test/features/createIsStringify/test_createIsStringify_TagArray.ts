import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagArray } from "../../structures/TagArray";

export const test_createIsStringify_TagArray = _test_isStringify(
    "TagArray",
    TagArray.generate,
    typia.createIsStringify<TagArray>(),
    TagArray.SPOILERS,
);
