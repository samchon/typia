import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_application_chatgpt_ObjectDescription =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectDescription",
  })(typia.llm.application<ObjectDescriptionApplication, "chatgpt">());

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
