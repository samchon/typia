import typia from "typia";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ObjectUnionDouble = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectUnionDouble",
    factory: ObjectUnionDouble
  })(
    typia.llm.application<ObjectUnionDoubleApplication, "chatgpt", { equals: true }>(),
  );

interface ObjectUnionDoubleApplication {
  insert(p: { first: ObjectUnionDouble }): Promise<void>;
  reduce(p: { first: ObjectUnionDouble, second: ObjectUnionDouble | null }): Promise<ObjectUnionDouble>;
  coalesce(p: {
    first: ObjectUnionDouble | null,
    second: ObjectUnionDouble | null,
    third?: ObjectUnionDouble | null,
  }): Promise<ObjectUnionDouble | null>;
}