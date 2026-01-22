import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_assertStringify_DynamicSimple = (): void =>
  _test_json_assertStringify(TypeGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )((input) => typia.json.assertStringify<DynamicSimple>(input));
