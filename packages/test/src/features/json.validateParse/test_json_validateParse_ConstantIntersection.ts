import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_validateParse_ConstantIntersection =
  _test_json_validateParse("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.json.validateParse<ConstantIntersection>(input));
