import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_UltimateUnion =
  _test_json_assertStringify(TypeGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(typia.json.createAssertStringify<UltimateUnion>());
