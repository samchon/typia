import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_createIsStringify_TagFormat = _test_isStringify(
    "TagFormat",
    TagFormat.generate,
    typia.createIsStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
