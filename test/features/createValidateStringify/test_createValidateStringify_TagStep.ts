import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagStep = _test_validateStringify(
    "TagStep",
    TagStep.generate,
    typia.createValidateStringify<TagStep>(),
    TagStep.SPOILERS,
);
