import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_schema_v3_0_ArrayUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayUnion",
  })(typia.json.schema<ArrayUnion, "3.0">());
