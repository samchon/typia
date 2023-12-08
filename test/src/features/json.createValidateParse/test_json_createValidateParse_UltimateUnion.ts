import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createValidateParse_UltimateUnion =
  _test_json_validateParse("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.json.createValidateParse<UltimateUnion>(),
  );
