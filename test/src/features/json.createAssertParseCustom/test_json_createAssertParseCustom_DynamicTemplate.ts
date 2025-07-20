import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createAssertParseCustom_DynamicTemplate = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(
    typia.json.createAssertParse<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
