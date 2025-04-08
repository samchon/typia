import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_schema_v3_0_TypeTagLength = _test_json_schema({
  version: "3.0",
  name: "TypeTagLength",
})(typia.json.schema<TypeTagLength, "3.0">());
