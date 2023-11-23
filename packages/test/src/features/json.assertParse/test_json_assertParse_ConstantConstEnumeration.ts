import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_assertParse_ConstantConstEnumeration =
  _test_json_assertParse("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input) => typia.json.assertParse<ConstantConstEnumeration>(input));
