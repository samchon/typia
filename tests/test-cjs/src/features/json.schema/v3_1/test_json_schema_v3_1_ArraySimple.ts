import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_schema_v3_1_ArraySimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArraySimple",
  })(typia.json.schema<ArraySimple, "3.1">());
