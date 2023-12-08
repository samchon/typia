import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_assertStringify_ConstantConstEnumeration =
  _test_json_assertStringify(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.json.assertStringify<ConstantConstEnumeration>(input),
  );
