import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TypeTagMatrix =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagMatrix",
  })(typia.json.application<[TypeTagMatrix], "swagger", true>());
