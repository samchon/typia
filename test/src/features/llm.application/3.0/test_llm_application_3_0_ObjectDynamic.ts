import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_application_3_0_ObjectDynamic = _test_llm_application({
  model: "3.0",
  name: "ObjectDynamic",
})(typia.llm.application<ObjectDynamicApplication, "3.0">());

interface ObjectDynamicApplication {
  insert(first: ObjectDynamic): Promise<void>;
  reduce(
    first: ObjectDynamic,
    second: ObjectDynamic | null,
  ): Promise<ObjectDynamic>;
  coalesce(
    first: ObjectDynamic | null,
    second: ObjectDynamic | null,
    third?: ObjectDynamic | null,
  ): Promise<ObjectDynamic | null>;
}
