import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_schema_v3_0_TypeTagRange = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TypeTagRange",
  })(typia.json.schema<TypeTagRange, "3.0">());
