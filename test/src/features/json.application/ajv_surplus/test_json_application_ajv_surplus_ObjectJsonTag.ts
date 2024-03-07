import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectJsonTag =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectJsonTag",
  })(typia.json.application<[ObjectJsonTag], "ajv", true>());
