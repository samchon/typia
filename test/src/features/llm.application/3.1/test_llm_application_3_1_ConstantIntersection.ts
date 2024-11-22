import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_llm_application_3_1_ConstantIntersection =
  _test_llm_application({
    model: "3.1",
    name: "ConstantIntersection",
  })(typia.llm.application<ConstantIntersectionApplication, "3.1">());

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
