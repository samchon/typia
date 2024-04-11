import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_application_v3_1_ClassPropertyAssignment =
  _test_json_application({
    version: "3.1",
    name: "ClassPropertyAssignment",
  })(typia.json.application<[ClassPropertyAssignment], "3.1">());
