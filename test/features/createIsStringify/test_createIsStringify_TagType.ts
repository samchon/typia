import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagType } from "../../structures/TagType";

export const test_createIsStringify_TagType = _test_isStringify(
    "TagType",
    TagType.generate,
    typia.createIsStringify<TagType>(),
    TagType.SPOILERS,
);
