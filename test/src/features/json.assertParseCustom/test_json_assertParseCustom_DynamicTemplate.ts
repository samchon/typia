import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_assertParseCustom_DynamicTemplate = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.json.assertParse<DynamicTemplate>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
