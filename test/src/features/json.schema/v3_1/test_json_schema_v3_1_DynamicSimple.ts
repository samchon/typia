import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_schema_v3_1_DynamicSimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicSimple",
  })(typia.json.schema<DynamicSimple, "3.1">());
