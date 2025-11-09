import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validateEquals_ConstantConstEnumeration = (): void =>
  _test_validateEquals("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input) => typia.validateEquals<ConstantConstEnumeration>(input));
