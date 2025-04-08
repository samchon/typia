import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_schema_v3_0_TypeTagFormat = _test_json_schema({
  version: "3.0",
  name: "TypeTagFormat",
})(typia.json.schema<TypeTagFormat, "3.0">());
