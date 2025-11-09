import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_schemas_v3_0_UltimateUnion = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "UltimateUnion",
  })(typia.json.schemas<[UltimateUnion], "3.0">());
