import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_equals_ConstantConstEnumeration = (): void =>
  _test_equals("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input) => typia.equals<ConstantConstEnumeration>(input));
