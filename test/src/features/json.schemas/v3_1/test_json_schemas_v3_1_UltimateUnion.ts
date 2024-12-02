import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_schemas_v3_1_UltimateUnion = _test_json_schemas({
  version: "3.1",
  name: "UltimateUnion",
})(typia.json.schemas<[UltimateUnion], "3.1">());
