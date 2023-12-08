import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createStringify_ConstantConstEnumeration =
  _test_json_stringify("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )(typia.json.createStringify<ConstantConstEnumeration>());
