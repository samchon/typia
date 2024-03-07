import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectPartial =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectPartial",
  })(typia.json.application<[ObjectPartial], "ajv", true>());
