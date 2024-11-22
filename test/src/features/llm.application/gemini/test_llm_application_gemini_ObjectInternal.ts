import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_application_gemini_ObjectInternal = _test_llm_application(
  {
    model: "gemini",
    name: "ObjectInternal",
  },
)(typia.llm.application<ObjectInternalApplication, "gemini">());

interface ObjectInternalApplication {
  insert(first: ObjectInternal): Promise<void>;
  reduce(
    first: ObjectInternal,
    second: ObjectInternal | null,
  ): Promise<ObjectInternal>;
  coalesce(
    first: ObjectInternal | null,
    second: ObjectInternal | null,
    third?: ObjectInternal | null,
  ): Promise<ObjectInternal | null>;
}
