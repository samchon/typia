import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectDescription =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectDescription",
  })(typia.json.application<[ObjectDescription], "ajv", false>());
