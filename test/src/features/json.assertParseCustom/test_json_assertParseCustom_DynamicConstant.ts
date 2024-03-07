import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicConstant =
  _test_json_assertParse(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )((input) =>
    typia.json.assertParse<DynamicConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
