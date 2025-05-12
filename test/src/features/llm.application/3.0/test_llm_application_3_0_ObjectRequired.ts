import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_application_3_0_ObjectRequired = _test_llm_application({
  model: "3.0",
  name: "ObjectRequired",
  factory: ObjectRequired,
})(typia.llm.application<ObjectRequiredApplication, "3.0">());

interface ObjectRequiredApplication {
  insert(p: { first: ObjectRequired }): Promise<void>;
  reduce(p: {
    first: ObjectRequired;
    second: ObjectRequired | null;
  }): Promise<ObjectRequired>;
  coalesce(p: {
    first: ObjectRequired | null;
    second: ObjectRequired | null;
    third?: ObjectRequired | null;
  }): Promise<ObjectRequired | null>;
}
