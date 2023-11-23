import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createValidateParse_DynamicTree =
  _test_json_validateParse("DynamicTree")<DynamicTree>(DynamicTree)(
    typia.json.createValidateParse<DynamicTree>(),
  );
