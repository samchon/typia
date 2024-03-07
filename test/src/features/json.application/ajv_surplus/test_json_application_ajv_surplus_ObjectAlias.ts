import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectAlias",
  })(typia.json.application<[ObjectAlias], "ajv", true>());
