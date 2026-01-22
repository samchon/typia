import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_validateParse_DynamicConstant = (): void =>
  _test_json_validateParse("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    (input) => typia.json.validateParse<DynamicConstant>(input),
  );
