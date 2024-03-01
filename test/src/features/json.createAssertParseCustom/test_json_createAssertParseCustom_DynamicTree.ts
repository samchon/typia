import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createAssertParseCustom_DynamicTree =
  _test_json_assertParse(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )(typia.json.createAssertParse<DynamicTree>((p) => new CustomGuardError(p)));
