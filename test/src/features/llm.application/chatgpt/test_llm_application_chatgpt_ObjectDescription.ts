import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectDescription = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectDescription",
    factory: ObjectDescription
  })(
    typia.llm.application<ObjectDescriptionApplication, "chatgpt">(),
  );

interface ObjectDescriptionApplication {
  insert(p: { first: ObjectDescription }): Promise<void>;
  reduce(p: { first: ObjectDescription, second: ObjectDescription | null }): Promise<ObjectDescription>;
  coalesce(p: {
    first: ObjectDescription | null,
    second: ObjectDescription | null,
    third?: ObjectDescription | null,
  }): Promise<ObjectDescription | null>;
}