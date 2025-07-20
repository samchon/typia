import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createAssertParse_UltimateUnion = (): void =>
  _test_json_assertParse(TypeGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(typia.json.createAssertParse<UltimateUnion>());
