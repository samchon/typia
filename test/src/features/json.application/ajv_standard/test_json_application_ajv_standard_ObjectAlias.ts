import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectAlias",
  })(typia.json.application<[ObjectAlias], "ajv", false>());
