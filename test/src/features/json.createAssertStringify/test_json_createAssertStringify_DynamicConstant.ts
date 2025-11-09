import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createAssertStringify_DynamicConstant = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)(
    typia.json.createAssertStringify<DynamicConstant>(),
  );
