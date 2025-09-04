import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_application_gemini_ObjectDescription = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ObjectDescription",
    factory: ObjectDescription,
  })(typia.llm.application<ObjectDescriptionApplication, "gemini">());

interface ObjectDescriptionApplication {
  insert(p: { first: ObjectDescription }): Promise<void>;
  reduce(p: {
    first: ObjectDescription;
    second: ObjectDescription | null;
  }): Promise<ObjectDescription>;
  coalesce(p: {
    first: ObjectDescription | null;
    second: ObjectDescription | null;
    third?: ObjectDescription | null;
  }): Promise<ObjectDescription | null>;
}
