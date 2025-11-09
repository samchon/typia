import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createAssertStringify_DynamicTree = (): void =>
  _test_json_assertStringify(TypeGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )(typia.json.createAssertStringify<DynamicTree>());
