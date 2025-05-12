import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_schemas_v3_0_ConstantIntersection = _test_json_schemas({
  version: "3.0",
  name: "ConstantIntersection",
})(typia.json.schemas<[ConstantIntersection], "3.0">());
