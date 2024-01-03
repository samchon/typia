import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_application_ajv_surplus_ObjectRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectRecursive",
  })(typia.json.application<[ObjectRecursive], "ajv", true>());
