import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_schema_v3_0_TypeTagPattern = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TypeTagPattern",
  })(typia.json.schema<TypeTagPattern, "3.0">());
