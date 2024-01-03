import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_application_ajv_standard_ObjectRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectRecursive",
  })(typia.json.application<[ObjectRecursive], "ajv", false>());
