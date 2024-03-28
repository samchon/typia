import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_application_ajv_standard_ObjectUndefined =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUndefined",
  })(typia.json.application<[ObjectUndefined], "ajv", false>());
