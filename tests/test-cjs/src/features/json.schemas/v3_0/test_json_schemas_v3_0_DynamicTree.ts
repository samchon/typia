import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_schemas_v3_0_DynamicTree = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "DynamicTree",
  })(typia.json.schemas<[DynamicTree], "3.0">());
