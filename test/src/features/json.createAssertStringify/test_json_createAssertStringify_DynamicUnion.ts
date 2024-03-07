import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_DynamicUnion =
  _test_json_assertStringify(TypeGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.json.createAssertStringify<DynamicUnion>());
