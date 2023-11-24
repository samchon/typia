import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_assertParse_ConstantIntersection =
  _test_json_assertParse("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.json.assertParse<ConstantIntersection>(input));
