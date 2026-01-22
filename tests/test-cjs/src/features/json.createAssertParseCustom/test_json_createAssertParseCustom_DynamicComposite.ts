import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createAssertParseCustom_DynamicComposite = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)(
    typia.json.createAssertParse<DynamicComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
