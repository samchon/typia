import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_application_ajv_surplus_ObjectGeneric =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectGeneric",
  })(typia.json.application<[ObjectGeneric], "ajv", true>());
