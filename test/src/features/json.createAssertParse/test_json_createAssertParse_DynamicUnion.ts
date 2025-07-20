import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_createAssertParse_DynamicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.json.createAssertParse<DynamicUnion>());
