import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createAssertParse_DynamicNever = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )(typia.json.createAssertParse<DynamicNever>());
