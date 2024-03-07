import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TypeTagCustom =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagCustom",
  })(typia.json.application<[TypeTagCustom], "swagger", true>());
