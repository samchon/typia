import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_applicationOfValidate_gemini_ObjectDescription =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "ObjectDescription",
    factory: ObjectDescription,
  })(typia.llm.applicationOfValidate<ObjectDescriptionApplication, "gemini">());

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
