import typia from "typia";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectGenericAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericAlias",
  })(typia.json.application<[ObjectGenericAlias], "ajv", false>());
