import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_schemas_v3_1_DynamicTemplate = _test_json_schemas({
  version: "3.1",
  name: "DynamicTemplate",
})(typia.json.schemas<[DynamicTemplate], "3.1">());
