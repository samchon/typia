import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_application_v3_1_ConstantIntersection =
  _test_json_application({
    version: "3.1",
    name: "ConstantIntersection",
  })(typia.json.application<[ConstantIntersection], "3.1">());
