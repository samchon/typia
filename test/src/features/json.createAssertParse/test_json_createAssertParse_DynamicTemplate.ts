import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_DynamicTemplate =
  _test_json_assertParse(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.json.createAssertParse<DynamicTemplate>());
