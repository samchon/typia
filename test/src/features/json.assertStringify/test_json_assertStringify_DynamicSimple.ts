import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_DynamicSimple =
  _test_json_assertStringify(TypeGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )((input) => typia.json.assertStringify<DynamicSimple>(input));
