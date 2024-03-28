import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_application_ajv_surplus_ObjectDescription =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectDescription",
  })(typia.json.application<[ObjectDescription], "ajv", true>());
