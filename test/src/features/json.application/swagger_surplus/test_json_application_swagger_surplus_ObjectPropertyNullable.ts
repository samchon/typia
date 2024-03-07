import typia from "typia";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ObjectPropertyNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectPropertyNullable",
  })(typia.json.application<[ObjectPropertyNullable], "swagger", true>());
