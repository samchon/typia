import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_json_application_ajv_standard_ObjectGenericUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericUnion",
  })(typia.json.application<[ObjectGenericUnion], "ajv", false>());
