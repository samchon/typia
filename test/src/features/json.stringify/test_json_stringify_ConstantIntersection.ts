import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_stringify_ConstantIntersection = _test_json_stringify(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.json.stringify<ConstantIntersection>(input),
);
