import typia from "typia";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicTemplate = _test_validate(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidate<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
