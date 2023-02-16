import typia from "typia";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_DynamicTemplate = _test_validateEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidateEquals<DynamicTemplate>(),
);
