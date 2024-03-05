import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_assertParseCustom_DynamicUndefined =
  _test_json_assertParse(CustomGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)((input) =>
    typia.json.assertParse<DynamicUndefined>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
