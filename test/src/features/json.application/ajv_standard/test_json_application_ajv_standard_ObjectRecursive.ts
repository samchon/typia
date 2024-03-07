import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectRecursive",
  })(typia.json.application<[ObjectRecursive], "ajv", false>());
