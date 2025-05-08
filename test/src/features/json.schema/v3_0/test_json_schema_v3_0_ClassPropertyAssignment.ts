import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_schema_v3_0_ClassPropertyAssignment = _test_json_schema({
  version: "3.0",
  name: "ClassPropertyAssignment",
})(typia.json.schema<ClassPropertyAssignment, "3.0">());
