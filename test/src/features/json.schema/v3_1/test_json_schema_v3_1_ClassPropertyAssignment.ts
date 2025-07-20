import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_schema_v3_1_ClassPropertyAssignment = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ClassPropertyAssignment",
  })(typia.json.schema<ClassPropertyAssignment, "3.1">());
