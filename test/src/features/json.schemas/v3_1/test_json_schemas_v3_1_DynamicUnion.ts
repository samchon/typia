import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_schemas_v3_1_DynamicUnion = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "DynamicUnion",
  })(typia.json.schemas<[DynamicUnion], "3.1">());
