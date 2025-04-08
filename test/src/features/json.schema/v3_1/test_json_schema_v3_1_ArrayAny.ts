import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_schema_v3_1_ArrayAny = _test_json_schema({
  version: "3.1",
  name: "ArrayAny",
})(typia.json.schema<ArrayAny, "3.1">());
