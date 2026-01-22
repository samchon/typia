import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_isStringify_DynamicTemplate = (): void =>
  _test_json_isStringify("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    (input) => typia.json.isStringify<DynamicTemplate>(input),
  );
