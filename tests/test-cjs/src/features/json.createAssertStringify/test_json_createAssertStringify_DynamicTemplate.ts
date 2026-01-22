import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createAssertStringify_DynamicTemplate = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "DynamicTemplate",
  )<DynamicTemplate>(DynamicTemplate)(
    typia.json.createAssertStringify<DynamicTemplate>(),
  );
