import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_application_ajv_standard_ObjectGenericArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericArray",
  })(typia.json.application<[ObjectGenericArray], "ajv", false>());
