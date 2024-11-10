import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_schemas_v3_1_ClassPropertyAssignment =
  _test_json_schemas({
    version: "3.1",
    name: "ClassPropertyAssignment",
  })(typia.json.schemas<[ClassPropertyAssignment], "3.1">());
