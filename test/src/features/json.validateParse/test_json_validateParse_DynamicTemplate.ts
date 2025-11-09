import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_validateParse_DynamicTemplate = (): void =>
  _test_json_validateParse("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    (input) => typia.json.validateParse<DynamicTemplate>(input),
  );
