import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_application_ajv_standard_ObjectDate =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectDate",
  })(typia.json.application<[ObjectDate], "ajv", false>());
