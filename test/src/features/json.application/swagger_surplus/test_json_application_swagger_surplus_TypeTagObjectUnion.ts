import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TypeTagObjectUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagObjectUnion",
  })(typia.json.application<[TypeTagObjectUnion], "swagger", true>());
