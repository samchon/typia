import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_schema_v3_0_TypeTagType = _test_json_schema({
  version: "3.0",
  name: "TypeTagType",
})(typia.json.schema<TypeTagType, "3.0">());
