import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_schema_v3_0_ClassGetter = _test_json_schema({
  version: "3.0",
  name: "ClassGetter",
})(typia.json.schema<ClassGetter, "3.0">());
