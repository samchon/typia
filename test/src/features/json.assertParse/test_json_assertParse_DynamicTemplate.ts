import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_assertParse_DynamicTemplate = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) => typia.json.assertParse<DynamicTemplate>(input));
