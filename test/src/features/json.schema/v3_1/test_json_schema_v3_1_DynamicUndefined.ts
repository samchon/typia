import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_schema_v3_1_DynamicUndefined = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicUndefined",
  })(typia.json.schema<DynamicUndefined, "3.1">());
