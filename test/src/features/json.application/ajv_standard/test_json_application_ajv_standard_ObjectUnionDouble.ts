import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_application_ajv_standard_ObjectUnionDouble =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionDouble",
  })(typia.json.application<[ObjectUnionDouble], "ajv", false>());
