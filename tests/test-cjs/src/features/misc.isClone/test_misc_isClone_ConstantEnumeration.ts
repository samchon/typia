import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_isClone_ConstantEnumeration = (): void =>
  _test_misc_isClone("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input) => typia.misc.isClone<ConstantEnumeration>(input));
