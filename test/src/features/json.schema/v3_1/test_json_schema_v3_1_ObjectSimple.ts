import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_schema_v3_1_ObjectSimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectSimple",
  })(typia.json.schema<ObjectSimple, "3.1">());
