import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagLength = _test_validateStringify(
    "TagLength",
    TagLength.generate,
    typia.createValidateStringify<TagLength>(),
    TagLength.SPOILERS,
);
