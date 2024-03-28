import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createAssertParseCustom_DynamicEnumeration =
  _test_json_assertParse(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.json.createAssertParse<DynamicEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
