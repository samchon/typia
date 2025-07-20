import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_applicationEquals_chatgpt_ObjectDescription = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectDescription",
    factory: ObjectDescription,
  })(
    typia.llm.application<
      ObjectDescriptionApplication,
      "chatgpt",
      { equals:; true }
    >(),
  );

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
