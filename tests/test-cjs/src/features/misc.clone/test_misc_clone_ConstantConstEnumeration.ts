import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_clone_ConstantConstEnumeration = (): void =>
  _test_misc_clone("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input) => typia.misc.clone<ConstantConstEnumeration>(input));
