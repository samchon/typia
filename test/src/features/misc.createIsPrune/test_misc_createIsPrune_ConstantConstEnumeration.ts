import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createIsPrune_ConstantConstEnumeration = (): void =>
  _test_misc_isPrune("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )(typia.misc.createIsPrune<ConstantConstEnumeration>());
