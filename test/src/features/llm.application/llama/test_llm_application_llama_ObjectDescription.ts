import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_application_llama_ObjectDescription =
  _test_llm_application({
    model: "llama",
    name: "ObjectDescription",
  })(typia.llm.application<ObjectDescriptionApplication, "llama">());

interface ObjectDescriptionApplication {
  insert(first: ObjectDescription): Promise<void>;
  reduce(
    first: ObjectDescription,
    second: ObjectDescription | null,
  ): Promise<ObjectDescription>;
  coalesce(
    first: ObjectDescription | null,
    second: ObjectDescription | null,
    third?: ObjectDescription | null,
  ): Promise<ObjectDescription | null>;
}
