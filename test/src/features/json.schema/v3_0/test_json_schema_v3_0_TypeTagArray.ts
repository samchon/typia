import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_schema_v3_0_TypeTagArray = _test_json_schema({
  version: "3.0",
  name: "TypeTagArray",
})(typia.json.schema<TypeTagArray, "3.0">());
