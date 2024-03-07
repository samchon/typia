import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_DynamicConstant =
  _test_json_assertStringify(TypeGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)((input) =>
    typia.json.assertStringify<DynamicConstant>(input),
  );
