import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_schema_v3_0_UltimateUnion = _test_json_schema({
  version: "3.0",
  name: "UltimateUnion",
})(typia.json.schema<UltimateUnion, "3.0">());
