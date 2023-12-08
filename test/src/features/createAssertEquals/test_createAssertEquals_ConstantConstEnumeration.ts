import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertEquals_ConstantConstEnumeration =
  _test_assertEquals("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )(typia.createAssertEquals<ConstantConstEnumeration>());
