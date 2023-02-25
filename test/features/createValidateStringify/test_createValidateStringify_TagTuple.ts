import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagTuple = _test_validateStringify(
    "TagTuple",
    TagTuple.generate,
    typia.createValidateStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
