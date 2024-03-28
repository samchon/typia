import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_application_ajv_surplus_ObjectPartial =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectPartial",
  })(typia.json.application<[ObjectPartial], "ajv", true>());
