import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_schema_v3_1_TypeTagRange = _test_json_schema({
  version: "3.1",
  name: "TypeTagRange",
})(typia.json.schema<TypeTagRange, "3.1">());
