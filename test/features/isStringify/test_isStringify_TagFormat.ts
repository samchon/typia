import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagFormat = _test_isStringify(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.isStringify(input),
    TagFormat.SPOILERS,
);
