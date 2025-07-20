import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_applicationEquals_llama_ObjectUnionNonPredictable =
  (): void =>
    _test_llm_applicationEquals({
      model: "llama",
      name: "ObjectUnionNonPredictable",
      factory: ObjectUnionNonPredictable,
    })(
      typia.llm.application<
        ObjectUnionNonPredictableApplication,
        "llama",
        { equals: true }
      >(),
    );

interface ObjectUnionNonPredictableApplication {
  insert(p: { first: ObjectUnionNonPredictable }): Promise<void>;
  reduce(p: {
    first: ObjectUnionNonPredictable;
    second: ObjectUnionNonPredictable | null;
  }): Promise<ObjectUnionNonPredictable>;
  coalesce(p: {
    first: ObjectUnionNonPredictable | null;
    second: ObjectUnionNonPredictable | null;
    third?: ObjectUnionNonPredictable | null;
  }): Promise<ObjectUnionNonPredictable | null>;
}
