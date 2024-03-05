import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_assertStringify_DynamicNever =
  _test_json_assertStringify(TypeGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )((input) => typia.json.assertStringify<DynamicNever>(input));
