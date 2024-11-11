import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_schemas_v3_1_TypeTagPattern = _test_json_schemas({
  version: "3.1",
  name: "TypeTagPattern",
})(typia.json.schemas<[TypeTagPattern], "3.1">());
