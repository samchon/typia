import typia from "typia";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_ObjectUnionNonPredictable = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ObjectUnionNonPredictable",
    factory: ObjectUnionNonPredictable
  })(
    typia.llm.application<ObjectUnionNonPredictableApplication, "3.1", { equals: true }>(),
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