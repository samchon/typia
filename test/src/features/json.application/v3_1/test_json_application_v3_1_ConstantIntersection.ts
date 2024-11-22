import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_application_v3_1_ConstantIntersection =
  _test_json_application({
    version: "3.1",
    name: "ConstantIntersection",
  })(typia.json.application<ConstantIntersectionApplication, "3.1">());

interface ConstantIntersectionApplication {
  insert(first: ConstantIntersection): Promise<void>;
  reduce(
    first: ConstantIntersection,
    second: ConstantIntersection | null,
  ): Promise<ConstantIntersection>;
  coalesce(
    first: ConstantIntersection | null,
    second: ConstantIntersection | null,
    third?: ConstantIntersection | null,
  ): Promise<ConstantIntersection | null>;
}
