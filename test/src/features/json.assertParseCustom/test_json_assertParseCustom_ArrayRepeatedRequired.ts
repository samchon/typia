import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ArrayRepeatedRequired =
  _test_json_assertParse(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
    typia.json.assertParse<ArrayRepeatedRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
