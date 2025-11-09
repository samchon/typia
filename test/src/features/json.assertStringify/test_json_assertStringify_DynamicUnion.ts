import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_assertStringify_DynamicUnion = (): void =>
  _test_json_assertStringify(TypeGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )((input) => typia.json.assertStringify<DynamicUnion>(input));
