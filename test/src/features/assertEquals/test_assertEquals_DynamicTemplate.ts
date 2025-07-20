import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertEquals_DynamicTemplate = (): void =>
  _test_assertEquals(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) => typia.assertEquals<DynamicTemplate>(input));
