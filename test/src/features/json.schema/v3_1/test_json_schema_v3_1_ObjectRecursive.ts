import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_schema_v3_1_ObjectRecursive = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectRecursive",
  })(typia.json.schema<ObjectRecursive, "3.1">());
