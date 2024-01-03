import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_application_ajv_standard_ObjectOptional =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectOptional",
  })(typia.json.application<[ObjectOptional], "ajv", false>());
