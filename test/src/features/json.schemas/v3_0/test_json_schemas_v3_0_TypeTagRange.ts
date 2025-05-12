import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_schemas_v3_0_TypeTagRange = _test_json_schemas({
  version: "3.0",
  name: "TypeTagRange",
})(typia.json.schemas<[TypeTagRange], "3.0">());
