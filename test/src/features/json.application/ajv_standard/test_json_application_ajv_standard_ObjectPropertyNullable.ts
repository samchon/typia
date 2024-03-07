import typia from "typia";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectPropertyNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectPropertyNullable",
  })(typia.json.application<[ObjectPropertyNullable], "ajv", false>());
