import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createAssertParseCustom_DynamicConstant =
  _test_json_assertParse(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(
    typia.json.createAssertParse<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
