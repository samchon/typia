import typia from "typia";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicTemplate = _test_validateStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidateStringify<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
