import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ClassPropertyAssignment =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ClassPropertyAssignment",
  })(typia.json.application<[ClassPropertyAssignment], "ajv", false>());
