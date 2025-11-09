import typia from "typia";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ObjectDynamic = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectDynamic",
    factory: ObjectDynamic
  })(
    typia.llm.application<ObjectDynamicApplication, "chatgpt", { equals: true }>(),
  );

interface ObjectDynamicApplication {
  insert(p: { first: ObjectDynamic }): Promise<void>;
  reduce(p: { first: ObjectDynamic, second: ObjectDynamic | null }): Promise<ObjectDynamic>;
  coalesce(p: {
    first: ObjectDynamic | null,
    second: ObjectDynamic | null,
    third?: ObjectDynamic | null,
  }): Promise<ObjectDynamic | null>;
}