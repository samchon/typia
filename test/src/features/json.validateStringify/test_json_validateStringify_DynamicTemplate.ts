import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_validateStringify_DynamicTemplate = (): void =>
  _test_json_validateStringify("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) => typia.json.validateStringify<DynamicTemplate>(input));
