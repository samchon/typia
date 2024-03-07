import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectNullable",
  })(typia.json.application<[ObjectNullable], "ajv", true>());
