import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectInternal =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectInternal",
  })(typia.json.application<[ObjectInternal], "ajv", false>());
