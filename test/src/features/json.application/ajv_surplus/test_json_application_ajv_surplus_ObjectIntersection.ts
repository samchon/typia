import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_application_ajv_surplus_ObjectIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectIntersection",
  })(typia.json.application<[ObjectIntersection], "ajv", true>());
