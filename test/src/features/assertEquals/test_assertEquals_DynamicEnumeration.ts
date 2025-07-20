import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertEquals_DynamicEnumeration = (): void =>
  _test_assertEquals(TypeGuardError)("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )((input) => typia.assertEquals<DynamicEnumeration>(input));
