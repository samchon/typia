import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_application_ajv_standard_ObjectNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectNullable",
  })(typia.json.application<[ObjectNullable], "ajv", false>());
