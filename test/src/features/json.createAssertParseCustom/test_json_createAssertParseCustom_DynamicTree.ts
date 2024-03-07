import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_DynamicTree =
  _test_json_assertParse(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )(typia.json.createAssertParse<DynamicTree>((p) => new CustomGuardError(p)));
