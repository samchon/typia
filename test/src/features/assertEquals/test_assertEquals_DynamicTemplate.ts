import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_assertEquals_DynamicTemplate = _test_assertEquals(
  TypeGuardError,
)("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.assertEquals<DynamicTemplate>(input),
);
