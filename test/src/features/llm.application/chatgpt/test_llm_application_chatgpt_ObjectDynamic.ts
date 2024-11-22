import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_application_chatgpt_ObjectDynamic = _test_llm_application(
  {
    model: "chatgpt",
    name: "ObjectDynamic",
  },
)(typia.llm.application<ObjectDynamicApplication, "chatgpt">());

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
