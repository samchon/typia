import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createValidateParse_DynamicConstant =
  _test_json_validateParse("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    typia.json.createValidateParse<DynamicConstant>(),
  );
