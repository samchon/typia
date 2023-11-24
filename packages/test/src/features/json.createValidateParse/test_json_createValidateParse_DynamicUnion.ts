import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_createValidateParse_DynamicUnion =
  _test_json_validateParse("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    typia.json.createValidateParse<DynamicUnion>(),
  );
