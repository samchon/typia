import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_assertParse_DynamicConstant = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )((input) => typia.json.assertParse<DynamicConstant>(input));
