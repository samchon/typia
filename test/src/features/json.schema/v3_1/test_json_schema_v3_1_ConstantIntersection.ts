import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_schema_v3_1_ConstantIntersection = _test_json_schema({
  version: "3.1",
  name: "ConstantIntersection",
})(typia.json.schema<ConstantIntersection, "3.1">());
