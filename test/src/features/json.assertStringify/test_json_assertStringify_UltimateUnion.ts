import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_assertStringify_UltimateUnion = (): void =>
  _test_json_assertStringify(TypeGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )((input) => typia.json.assertStringify<UltimateUnion>(input));
