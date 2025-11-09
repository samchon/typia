import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createStringify_ConstantEnumeration = (): void =>
  _test_json_stringify("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )(typia.json.createStringify<ConstantEnumeration>());
