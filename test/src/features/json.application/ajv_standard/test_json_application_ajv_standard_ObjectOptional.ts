import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectOptional =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectOptional",
  })(typia.json.application<[ObjectOptional], "ajv", false>());
