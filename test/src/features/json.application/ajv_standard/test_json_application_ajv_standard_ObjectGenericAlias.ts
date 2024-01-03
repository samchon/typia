import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_application_ajv_standard_ObjectGenericAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericAlias",
  })(typia.json.application<[ObjectGenericAlias], "ajv", false>());
