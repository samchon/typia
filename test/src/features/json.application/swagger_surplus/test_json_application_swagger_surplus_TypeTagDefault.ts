import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TypeTagDefault =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagDefault",
  })(typia.json.application<[TypeTagDefault], "swagger", true>());
