import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_DynamicTemplate = _test_assertEquals(CustomGuardError)(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)((input) => typia.assertEquals<DynamicTemplate>(input, (p) => new CustomGuardError(p)));
