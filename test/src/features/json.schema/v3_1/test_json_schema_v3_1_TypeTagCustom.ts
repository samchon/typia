import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_schema_v3_1_TypeTagCustom = _test_json_schema({
  version: "3.1",
  name: "TypeTagCustom",
})(typia.json.schema<TypeTagCustom, "3.1">());
