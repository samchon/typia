import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_application_llama_ObjectUndefined = _test_llm_application(
  {
    model: "llama",
    name: "ObjectUndefined",
  },
)(typia.llm.application<ObjectUndefinedApplication, "llama">());

interface ObjectUndefinedApplication {
  insert(first: ObjectUndefined): Promise<void>;
  reduce(
    first: ObjectUndefined,
    second: ObjectUndefined | null,
  ): Promise<ObjectUndefined>;
  coalesce(
    first: ObjectUndefined | null,
    second: ObjectUndefined | null,
    third?: ObjectUndefined | null,
  ): Promise<ObjectUndefined | null>;
}
