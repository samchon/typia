import typia from "typia";
import { TypeTagArray } from "../../../structures/TypeTagArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_TypeTagArray =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagArray",
  })(typia.json.application<[TypeTagArray], "swagger", false>());
