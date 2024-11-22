import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_application_3_1_ObjectRequired = _test_llm_application({
  model: "3.1",
  name: "ObjectRequired",
})(typia.llm.application<ObjectRequiredApplication, "3.1">());

interface ObjectRequiredApplication {
  insert(first: ObjectRequired): Promise<void>;
  reduce(
    first: ObjectRequired,
    second: ObjectRequired | null,
  ): Promise<ObjectRequired>;
  coalesce(
    first: ObjectRequired | null,
    second: ObjectRequired | null,
    third?: ObjectRequired | null,
  ): Promise<ObjectRequired | null>;
}
