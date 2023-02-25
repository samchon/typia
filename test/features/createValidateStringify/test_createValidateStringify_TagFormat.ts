import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagFormat = _test_validateStringify(
    "TagFormat",
    TagFormat.generate,
    typia.createValidateStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
