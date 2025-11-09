import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_schema_v3_1_ClassMethod = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ClassMethod",
  })(typia.json.schema<ClassMethod, "3.1">());
