import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createValidateParse_DynamicSimple = (): void =>
  _test_json_validateParse("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    typia.json.createValidateParse<DynamicSimple>(),
  );
