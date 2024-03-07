import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_DynamicComposite =
  _test_json_assertParse(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)(
    typia.json.createAssertParse<DynamicComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
