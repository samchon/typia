import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createIsClone_ConstantConstEnumeration =
  _test_misc_isClone("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )(typia.misc.createIsClone<ConstantConstEnumeration>());
