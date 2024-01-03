import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_application_swagger_surplus_ConstantIntersection =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantIntersection",
  })(typia.json.application<[ConstantIntersection], "swagger", true>());
