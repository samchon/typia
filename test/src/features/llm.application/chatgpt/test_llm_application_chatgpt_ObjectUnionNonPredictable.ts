import typia from "typia";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectUnionNonPredictable = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionNonPredictable",
    factory: ObjectUnionNonPredictable
  })(
    typia.llm.application<ObjectUnionNonPredictableApplication, "chatgpt">(),
  );

interface ObjectUnionNonPredictableApplication {
  insert(p: { first: ObjectUnionNonPredictable }): Promise<void>;
  reduce(p: { first: ObjectUnionNonPredictable, second: ObjectUnionNonPredictable | null }): Promise<ObjectUnionNonPredictable>;
  coalesce(p: {
    first: ObjectUnionNonPredictable | null,
    second: ObjectUnionNonPredictable | null,
    third?: ObjectUnionNonPredictable | null,
  }): Promise<ObjectUnionNonPredictable | null>;
}