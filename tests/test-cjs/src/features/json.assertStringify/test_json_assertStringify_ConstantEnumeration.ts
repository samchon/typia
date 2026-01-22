import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_assertStringify_ConstantEnumeration = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.json.assertStringify<ConstantEnumeration>(input),
  );
